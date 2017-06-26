import Ren2WebGLProgramFactory  from "lib/ren2/webgl/program/factory.type";
import Ren2WebGLShaderFactory   from "lib/ren2/webgl/shader/factory.type";

class StandardRen2WebGLProgramFactory implements Ren2WebGLProgramFactory
{
  constructor(
    private webglShaderFactory  : Ren2WebGLShaderFactory
  ) {

  }

  construct(
    fragmentShaderSource  : string,
    vertexShaderSource    : string,
    webglRenderingContext : WebGLRenderingContext
  ): WebGLProgram
  {
    const webglProgram    = webglRenderingContext.createProgram();

    const fragmentShader  = this.webglShaderFactory.construct(
            fragmentShaderSource,
            webglRenderingContext.FRAGMENT_SHADER,
            webglRenderingContext
          ),
          vertexShader    = this.webglShaderFactory.construct(
            vertexShaderSource,
            webglRenderingContext.VERTEX_SHADER,
            webglRenderingContext
          );

    webglRenderingContext.attachShader(webglProgram, vertexShader);
    webglRenderingContext.attachShader(webglProgram, fragmentShader);

    webglRenderingContext.linkProgram(webglProgram);

    if (!webglRenderingContext.getProgramParameter(webglProgram, webglRenderingContext.LINK_STATUS))
    {
      throw "Unable to initialize the WebGL program: " + webglRenderingContext.getProgramInfoLog(webglProgram);
    }

    return webglProgram;
  }
}

export default StandardRen2WebGLProgramFactory;
