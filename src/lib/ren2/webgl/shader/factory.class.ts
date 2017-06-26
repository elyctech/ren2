import Ren2WebGLShaderFactory from "lib/ren2/webgl/shader/factory.type";

class StandardRen2WebGLShaderFactory implements Ren2WebGLShaderFactory
{
  construct(
    shaderSource          : string,
    shaderType            : number,
    webglRenderingContext : WebGLRenderingContext
  ): WebGLShader
  {
    const shader  = webglRenderingContext.createShader(shaderType);

    webglRenderingContext.shaderSource(shader, shaderSource);

    webglRenderingContext.compileShader(shader);

    if (!webglRenderingContext.getShaderParameter(shader, webglRenderingContext.COMPILE_STATUS))
    {
      const log = webglRenderingContext.getShaderInfoLog(shader);
      webglRenderingContext.deleteShader(shader);
      throw `An error occurred compiling the ${shaderType} shader: ${log}`;
    }

    return shader;
  }
}

export default StandardRen2WebGLShaderFactory;
