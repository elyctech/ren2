interface Ren2Buffer
{
  getIndexBuffer(): WebGLBuffer;

  getIndexCount(): number;

  getLayer(): number;

  getLocation(): Float32Array;

  getPositionBuffer(): WebGLBuffer;

  getTexture(): WebGLTexture;

  getTextureCoordinateBuffer(): WebGLBuffer;

  setIndices(
    indices : Uint16Array
  ): void;

  setLayer(
    layer: number
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
