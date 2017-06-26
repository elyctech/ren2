import Ren2CanvasContextMap           from "lib/ren2/canvas_context_map.type";
import Ren2ContextFactory             from "lib/ren2/context/factory.type";
import Ren2ModelCollectionFactory     from "lib/ren2/model/collection/factory.type";
import Ren2ModelFactory               from "lib/ren2/model/factory.type";
import Ren2StageFactory               from "lib/ren2/stage/factory.type";
import Ren2Service                    from "lib/ren2/service.type";
import Ren2ServiceFactory             from "lib/ren2/service/factory.type";
import Ren2TriangleCollectionFactory  from "lib/ren2/triangle/collection/factory.type";
import Ren2TriangleFactory            from "lib/ren2/triangle/factory.type";
import Ren2Uint16CollectionFactory    from "lib/ren2/uint16_collection/factory.type";
import Ren2VertexFactory              from "lib/ren2/vertex/factory.type";
import StandardRen2Service            from "lib/ren2/service.class";

class StandardRen2ServiceFactory implements Ren2ServiceFactory
{
  construct(
    canvasContexts            : Ren2CanvasContextMap,
    contextFactory            : Ren2ContextFactory,
    modelCollectionFactory    : Ren2ModelCollectionFactory,
    modelFactory              : Ren2ModelFactory,
    stageFactory              : Ren2StageFactory,
    triangleCollectionFactory : Ren2TriangleCollectionFactory,
    triangleFactory           : Ren2TriangleFactory,
    uint16CollectionFactory   : Ren2Uint16CollectionFactory,
    vertexFactory             : Ren2VertexFactory
  ): Ren2Service
  {
    return new StandardRen2Service(
      canvasContexts,
      contextFactory,
      modelCollectionFactory,
      modelFactory,
      stageFactory,
      triangleCollectionFactory,
      triangleFactory,
      uint16CollectionFactory,
      vertexFactory
    );
  }
}

export default StandardRen2ServiceFactory;
