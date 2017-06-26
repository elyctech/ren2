interface Ren2WebGLShaderFactory
{
  construct(
    shaderSource          : string,
    shaderType            : number,
    webglRenderingContext : WebGLRenderingContext
  ): WebGLShader;
}

export default Ren2WebGLShaderFactory;
