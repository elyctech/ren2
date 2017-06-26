import Ren2BufferFactory                  from "lib/ren2/buffer/factory.type";
import Ren2CanvasModelRepository          from "lib/ren2/model/repository.type";
import Ren2CanvasModelRepositoryFactory   from "lib/ren2/model/repository/factory.type";
import Ren2ModelBufferMap                 from "lib/ren2/model_buffer_map.type";
import StandardRen2CanvasModelRepository  from "lib/ren2/model/repository.class";

class StandardRen2CanvasModelRepositoryFactory implements Ren2CanvasModelRepositoryFactory
{
  construct(
    bufferFactory         : Ren2BufferFactory,
    modelBufferMap        : Ren2ModelBufferMap,
    webglRenderingContext : WebGLRenderingContext
  ): Ren2CanvasModelRepository
  {
    return new StandardRen2CanvasModelRepository(
      bufferFactory,
      modelBufferMap,
      webglRenderingContext
    );
  }
}

export default StandardRen2CanvasModelRepositoryFactory;
