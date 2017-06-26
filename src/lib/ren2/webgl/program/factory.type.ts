interface Ren2WebGLProgramFactory
{
  construct(
    fragmentShaderSource  : string,
    vertexShaderSource    : string,
    webglRenderingContext : WebGLRenderingContext
  ): WebGLProgram;
}

export default Ren2WebGLProgramFactory;
