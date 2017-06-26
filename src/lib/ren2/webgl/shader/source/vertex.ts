const vertexShaderSource = `
  attribute vec3 aPosition;
  attribute vec2 aTextureCoordinate;

  uniform vec2 uLocation;

  varying highp vec2 vTextureCoordinate;

  void main(void)
  {
    gl_Position = vec4(aPosition + vec3(uLocation, 0.0), 1.0);
    vTextureCoordinate = aTextureCoordinate;
  }
`;

export default vertexShaderSource;
