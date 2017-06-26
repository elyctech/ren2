import Ren2CanvasContextMap           from "lib/ren2/canvas_context_map.type";
import Ren2Context                    from "lib/ren2/context.type";
import Ren2ContextFactory             from "lib/ren2/context/factory.type";
import Ren2Model                      from "lib/ren2/model.type";
import Ren2ModelCollectionFactory     from "lib/ren2/model/collection/factory.type";
import Ren2ModelFactory               from "lib/ren2/model/factory.type";
import Ren2Service                    from "lib/ren2/service.type";
import Ren2Stage                      from "lib/ren2/stage.type";
import Ren2StageFactory               from "lib/ren2/stage/factory.type";
import Ren2TriangleCollectionFactory  from "lib/ren2/triangle/collection/factory.type";
import Ren2TriangleFactory            from "lib/ren2/triangle/factory.type";
import Ren2Uint16CollectionFactory    from "lib/ren2/uint16_collection/factory.type";
import Ren2Vertex                     from "lib/ren2/vertex.type";
import Ren2VertexFactory              from "lib/ren2/vertex/factory.type";

class StandardRen2Service implements Ren2Service
{
  constructor(
    private canvasContexts                : Ren2CanvasContextMap,
    private contextFactory                : Ren2ContextFactory,
    private modelCollectionFactory        : Ren2ModelCollectionFactory,
    private modelFactory                  : Ren2ModelFactory,
    private stageFactory                  : Ren2StageFactory,
    private triangleCollectionFactory     : Ren2TriangleCollectionFactory,
    private triangleFactory               : Ren2TriangleFactory,
    private uint16CollectionFactory       : Ren2Uint16CollectionFactory,
    private vertexFactory                 : Ren2VertexFactory
  ) {

  }

  clear(
    canvas  : HTMLCanvasElement
  ): void
  {
    let context : Ren2Context;

    if (this.canvasContexts.contains(canvas))
    {
      context = this.canvasContexts.get(canvas);
    }
    else
    {
      context = this.contextFactory.construct(canvas);

      this.canvasContexts.set(canvas, context);
    }

    context.clearCanvas();
  }

  createModel(
    layer         : number,
    locationX     : number,
    locationY     : number,
    textureImage  : HTMLImageElement
  ): Ren2Model
  {
    return this.modelFactory.construct(
      this.uint16CollectionFactory.construct(),
      layer,
      locationX,
      locationY,
      textureImage,
      this.triangleCollectionFactory.construct(),
      this.triangleFactory
    );
  }

  createStage(): Ren2Stage
  {
    return this.stageFactory.construct(
      this.modelCollectionFactory.construct()
    );
  }

  createVertex(
    xPosition           : number,
    yPosition           : number,
    uTextureCoordinate  : number,
    vTextureCoordinate  : number
  ): Ren2Vertex
  {
    return this.vertexFactory.construct(
      xPosition,
      yPosition,
      uTextureCoordinate,
      vTextureCoordinate
    );
  }

  render(
    canvas  : HTMLCanvasElement,
    stage   : Ren2Stage
  ): void
  {
    let context : Ren2Context;

    if (this.canvasContexts.contains(canvas))
    {
      context = this.canvasContexts.get(canvas);
    }
    else
    {
      context = this.contextFactory.construct(canvas);

      this.canvasContexts.set(canvas, context);
    }

    stage.eachModel((model  : Ren2Model) =>
    {
      context.draw(model);
    });
  }
}

export default StandardRen2Service;
