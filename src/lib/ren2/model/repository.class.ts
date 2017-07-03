import Ren2Buffer           from "lib/ren2/buffer.type";
import Ren2BufferFactory    from "lib/ren2/buffer/factory.type";
import Ren2ModelRepository  from "lib/ren2/model/repository.type";
import Ren2ModelBufferMap   from "lib/ren2/model_buffer_map.type";
import Ren2Model            from "lib/ren2/model.type";

// TODO Consider renaming this? Ren2ModelRepository? Similar to how UserRepository saves users to the database.
class StandardRen2ModelRepository implements Ren2ModelRepository
{
  private highestLayer: number;

  constructor(
    private bufferFactory         : Ren2BufferFactory,
    private modelBufferMap        : Ren2ModelBufferMap,
    private webglRenderingContext : WebGLRenderingContext
  ) {
    this.highestLayer = 0;
  }

  containsBuffer(
    model : Ren2Model
  ): boolean
  {
    return this.modelBufferMap.contains(model);
  }

  getBuffer(
    model : Ren2Model
  ): Ren2Buffer
  {
    let buffer;

    if (this.modelBufferMap.contains(model))
    {
      buffer = this.modelBufferMap.get(model);
    }
    else
    {
      throw "No buffer for model";
    }

    return buffer;
  }

  saveToBuffer(
    model : Ren2Model
  ): Ren2Buffer
  {
    let buffer;

    // TODO This should be divided up into a create and save method. The create would initialize a buffer with all of
    //      the necessary data while this would simply save the data to an existing buffer.

    if (this.modelBufferMap.contains(model))
    {
      buffer = this.modelBufferMap.get(model);
    }
    else
    {
      // TODO Consider also having this in a create method for a performance boost. Then, consider if this should save
      //      any model not created from this instance. If not, this would throw an error instead of creating a new
      //      buffer.
      buffer = this.bufferFactory.construct(
        this.webglRenderingContext.createBuffer(),
        0,
        1,
        Float32Array.from([0, 0]),
        this.webglRenderingContext.createBuffer(),
        // TODO Do not create redundant textures. A texture repository would help with this
        this.webglRenderingContext.createTexture(),
        this.webglRenderingContext.createBuffer(),
        this.webglRenderingContext
      );

      this.modelBufferMap.set(model, buffer);
    }

    // TODO Find a way to efficiently determine if rebuffering is necessary. Best I can think of is an event system.
    //      Maybe this will not be a performance issue?
    buffer.setIndices(
      model.getIndices().asArray()
    );

    // Keep track of highest layer
    const layer = model.getLayer();

    if (layer > this.highestLayer)
    {
      this.highestLayer = layer;

      this.modelBufferMap.each((model, buffer) =>
      {
        buffer.setLayer(
          -1.9 * model.getLayer() / this.highestLayer + 0.95
        );
      });
    }

    buffer.setLayer(
      // WebGL has negative values closer than positive values
      // TODO Highest-layer algorithm prone to pushing Z values to the extremes if there is an exetreme difference
      //      between layer values. Is this a problem?
      -1.9 * layer / this.highestLayer + 0.95
    );
    // buffer.setLayer(
    //   -layer
    // );

    buffer.setLocation(
      model.getLocationX(),
      model.getLocationY()
    );

    buffer.setPositions(
      model.getPositions()
    );

    // TODO To avoid redundant textures, this API will need to change
    buffer.setTextureImage(
      model.getTextureImage()
    );

    buffer.setTextureCoordinates(
      model.getTextureCoordinates()
    );

    return buffer;
  }
}

export default StandardRen2ModelRepository;
