interface Ren2Buffer
{
  getIndexBuffer(): WebGLBuffer;

  getIndexCount(): number;

  getLocation(): Float32Array;

  getPositionBuffer(): WebGLBuffer;

  getTexture(): WebGLTexture;

  getTextureCoordinateBuffer(): WebGLBuffer;

  setIndices(
    indices : Uint16Array
  ): void;

  setLocation(
    x : number,
    y : number
  ): void;

  setPositions(
    positions : Float32Array
  ): void;

  setTextureImage(
    textureImage  : HTMLImageElement
  ): void;

  setTextureCoordinates(
    textureCoordinates  : Float32Array
  ): void;
}

export default Ren2Buffer;
