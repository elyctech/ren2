import canvasContextMapFactory    from "app/ren2/canvas_context_map/factory";
import contextFactory             from "app/ren2/context/factory";
import modelCollectionFactory     from "app/ren2/model/collection/factory";
import modelFactory               from "app/ren2/model/factory";
import ren2ServiceFactory         from "app/ren2/service/factory";
import stageFactory               from "app/ren2/stage/factory";
import triangleCollectionFactory  from "app/ren2/triangle/collection/factory";
import triangleFactory            from "app/ren2/triangle/factory";
import uint16CollectionFactory    from "app/ren2/uint16_collection/factory";
import vertexFactory              from "app/ren2/vertex/factory";

(<any>window).ren2  = ren2ServiceFactory.construct(
                        canvasContextMapFactory.construct(),
                        contextFactory,
                        modelCollectionFactory,
                        modelFactory,
                        stageFactory,
                        triangleCollectionFactory,
                        triangleFactory,
                        uint16CollectionFactory,
                        vertexFactory
                      );
