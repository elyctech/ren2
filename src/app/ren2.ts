import canvasContextMapFactory    from "app/ren2/canvas_context_map/factory";
import contextFactory             from "app/ren2/context/factory";
import imageRepositoryFactory     from "app/ren2/image_repository/factory";
import modelCollectionFactory     from "app/ren2/model/collection/factory";
import modelFactory               from "app/ren2/model/factory";
import ren2ServiceFactory         from "app/ren2/service/factory";
import stageFactory               from "app/ren2/stage/factory";
import triangleCollectionFactory  from "app/ren2/triangle/collection/factory";
import triangleFactory            from "app/ren2/triangle/factory";
import uint16CollectionFactory    from "app/ren2/uint16_collection/factory";
import vertexFactory              from "app/ren2/vertex/factory";

const ren2Service = ren2ServiceFactory.construct(
        canvasContextMapFactory.construct(),
        contextFactory,
        imageRepositoryFactory.construct(),
        modelCollectionFactory,
        modelFactory,
        stageFactory,
        triangleCollectionFactory,
        triangleFactory,
        uint16CollectionFactory,
        vertexFactory
      );

export default ren2Service;
