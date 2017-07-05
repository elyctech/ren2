import Ren2BufferFactory          from "lib/ren2/buffer/factory.type";
import Ren2Context                from "lib/ren2/context.type";
import Ren2ContextFactory         from "lib/ren2/context/factory.type";
import Ren2ModelBufferMapFactory  from "lib/ren2/model_buffer_map/factory.type";
import Ren2ModelRepositoryFactory from "lib/ren2/model/repository/factory.type";
import Ren2RendererFactory        from "lib/ren2/renderer/factory.type";
import StandardRen2Context        from "lib/ren2/context.class";
import WebGLProgramFactory        from "lib/ren2/webgl/program/factory.type";

import webglFragmentShaderSource  from "lib/ren2/webgl/shader/source/fragment";
import webglVertexShaderSource    from "lib/ren2/webgl/shader/source/vertex";

class StandardRen2ContextFactory implements Ren2ContextFactory
{
  constructor(
    private bufferFactory           : Ren2BufferFactory,
    private modelBufferMapFactory   : Ren2ModelBufferMapFactory,
    private modelRepositoryFactory  : Ren2ModelRepositoryFactory,
    private rendererFactory         : Ren2RendererFactory,
    private webglProgramFactory     : WebGLProgramFactory
  ) {

  }

  construct(
    canvas  : HTMLCanvasElement
  ): Ren2Context
  {
    const webglRenderingContext = canvas.getContext("webgl");

    const webglProgram  = this.webglProgramFactory.construct(
            webglFragmentShaderSource,
            webglVertexShaderSource,
            webglRenderingContext
          );

    const modelRepository = this.modelRepositoryFactory.construct(
            this.bufferFactory,
            this.modelBufferMapFactory.construct(),
            webglRenderingContext
          ),
          renderer  = this.rendererFactory.construct(
            webglProgram,
            webglRenderingContext
          );

    return new StandardRen2Context(
      modelRepository,
      renderer,
      webglRenderingContext
    );
  }
}

export default StandardRen2ContextFactory;
