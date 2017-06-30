const vertexShaderSource = `
  attribute vec2 aPosition;
  attribute vec2 aTextureCoordinate;

  // uint is not supported in WebGL (GLSL 100) - it is in WebGL 2 (GLSL 300)
  uniform  int uLayer;
  uniform vec2 uLocation;

  varying highp vec2 vTextureCoordinate;

  void main(void)
  {
    gl_Position = vec4(aPosition + uLocation, uLayer, 1.0);
    vTextureCoordinate = aTextureCoordinate;
  }
`;

export default vertexShaderSource;
