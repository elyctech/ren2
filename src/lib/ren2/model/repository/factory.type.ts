import Ren2BufferFactory          from "lib/ren2/buffer/factory.type";
import Ren2CanvasModelRepository  from "lib/ren2/model/repository.type";
import Ren2ModelBufferMap         from "lib/ren2/model_buffer_map.type";

interface Ren2CanvasModelRepositoryFactory
{
  construct(
    bufferFactory         : Ren2BufferFactory,
    modelBufferMap        : Ren2ModelBufferMap,
    webglRenderingContext : WebGLRenderingContext
  ): Ren2CanvasModelRepository;
}

export default Ren2CanvasModelRepositoryFactory;
