import Ren2Renderer         from "lib/ren2/renderer.type";
import Ren2RendererFactory  from "lib/ren2/renderer/factory.type";
import StandardRen2Renderer from "lib/ren2/renderer.class";

class StandardRen2RendererFactory implements Ren2RendererFactory
{
  construct(
    webglProgram          : WebGLProgram,
    webglRenderingContext : WebGLRenderingContext
  ): Ren2Renderer
  {
    return new StandardRen2Renderer(
    webglProgram,
    webglRenderingContext
  );
  }
}

export default StandardRen2RendererFactory;
