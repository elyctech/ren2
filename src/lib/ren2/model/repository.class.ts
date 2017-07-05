import Ren2Buffer           from "lib/ren2/buffer.type";
import Ren2BufferFactory    from "lib/ren2/buffer/factory.type";
import Ren2ModelRepository  from "lib/ren2/model/repository.type";
import Ren2ModelBufferMap   from "lib/ren2/model_buffer_map.type";
import Ren2Model            from "lib/ren2/model.type";

class StandardRen2ModelRepository implements Ren2ModelRepository
{
  private highestLayer: number;

  constructor(
    private bufferFactory         : Ren2BufferFactory,
    private modelBufferMap        : Ren2ModelBufferMap,
    private webglRenderingContext : WebGLRenderingContext
  ) {
    this.highestLayer = 1;
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

    if (this.modelBufferMap.contains(model))
    {
      buffer = this.modelBufferMap.get(model);
    }
    else
    {
      buffer = this.bufferFactory.construct(
        this.webglRenderingContext.createBuffer(),
        0,
        1,
        Float32Array.from([0, 0]),
        this.webglRenderingContext.createBuffer(),
        this.webglRenderingContext.createTexture(),
        this.webglRenderingContext.createBuffer(),
        this.webglRenderingContext
      );

      this.modelBufferMap.set(model, buffer);
    }

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
      -1.9 * layer / this.highestLayer + 0.95
    );

    buffer.setLocation(
      model.getLocationX(),
      model.getLocationY()
    );

    buffer.setPositions(
      model.getPositions()
    );

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
