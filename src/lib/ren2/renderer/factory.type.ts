import Ren2Renderer from "lib/ren2/renderer.type";

interface Ren2RendererFactory
{
  construct(
    webglProgram          : WebGLProgram,
    webglRenderingContext : WebGLRenderingContext
  ): Ren2Renderer;
}

export default Ren2RendererFactory;
