import Ren2Buffer from "lib/ren2/buffer.type";

class StandardRen2Buffer implements Ren2Buffer
{
  constructor(
    private indexBuffer             : WebGLBuffer,
    private indexCount              : number,
    private layer                   : number,
    private location                : Float32Array,
    private positionBuffer          : WebGLBuffer,
    private texture                 : WebGLTexture,
    private textureCoordinateBuffer : WebGLBuffer,
    private webglRenderingContext   : WebGLRenderingContext
  ) {
    // TODO Standard texture properties?
    this.webglRenderingContext.bindTexture(
      this.webglRenderingContext.TEXTURE_2D,
      this.texture
    );

    this.webglRenderingContext.texParameteri(
      this.webglRenderingContext.TEXTURE_2D,
      this.webglRenderingContext.TEXTURE_MIN_FILTER,
      this.webglRenderingContext.LINEAR
    );

    this.webglRenderingContext.texParameteri(
      this.webglRenderingContext.TEXTURE_2D,
      this.webglRenderingContext.TEXTURE_WRAP_S,
      this.webglRenderingContext.REPEAT
    );

    this.webglRenderingContext.texParameteri(
      this.webglRenderingContext.TEXTURE_2D,
      this.webglRenderingContext.TEXTURE_WRAP_T,
      this.webglRenderingContext.REPEAT
    );

    this.webglRenderingContext.bindTexture(
      this.webglRenderingContext.TEXTURE_2D,
      null
    );
  }

  getIndexBuffer(): WebGLBuffer
  {
    return this.indexBuffer;
  }

  getIndexCount(): number
  {
    return this.indexCount;
  }

  getLayer(): number
  {
    return this.layer;
  }

  getLocation(): Float32Array
  {
    return this.location;
  }

  getPositionBuffer(): WebGLBuffer
  {
    return this.positionBuffer;
  }

  getTexture(): WebGLTexture
  {
    return this.texture;
  }

  getTextureCoordinateBuffer(): WebGLBuffer
  {
    return this.textureCoordinateBuffer;
  }

  setIndices(
    indices : Uint16Array
  ): void
  {
    this.webglRenderingContext.bindBuffer(
      this.webglRenderingContext.ELEMENT_ARRAY_BUFFER,
      this.indexBuffer
    );

    this.webglRenderingContext.bufferData(
      this.webglRenderingContext.ELEMENT_ARRAY_BUFFER,
      indices,
      this.webglRenderingContext.STATIC_DRAW
    );

    this.webglRenderingContext.bindBuffer(
      this.webglRenderingContext.ELEMENT_ARRAY_BUFFER,
      null
    );

    this.indexCount = indices.length;
  }

  setLayer(
    layer: number
  ): void
  {
     this.layer = layer;
  }

  setLocation(
    x : number,
    y : number
  ): void
  {
    this.location[0]  = x;
    this.location[1]  = y;
  }

  setPositions(
    positions : Float32Array
  ): void
  {
    this.webglRenderingContext.bindBuffer(
      this.webglRenderingContext.ARRAY_BUFFER,
      this.positionBuffer
    );

    this.webglRenderingContext.bufferData(
      this.webglRenderingContext.ARRAY_BUFFER,
      positions,
      this.webglRenderingContext.STATIC_DRAW
    );

    this.webglRenderingContext.bindBuffer(
      this.webglRenderingContext.ARRAY_BUFFER,
      null
    );
  }

  setTextureImage(
    textureImage  : HTMLImageElement
  ): void
  {
    this.webglRenderingContext.bindTexture(
      this.webglRenderingContext.TEXTURE_2D,
      this.texture
    );

    this.webglRenderingContext.texImage2D(
      this.webglRenderingContext.TEXTURE_2D,
      0,
      this.webglRenderingContext.RGBA,
      this.webglRenderingContext.RGBA,
      this.webglRenderingContext.UNSIGNED_BYTE,
      textureImage
    );

    this.webglRenderingContext.bindTexture(
      this.webglRenderingContext.TEXTURE_2D,
      null
    );
  }

  setTextureCoordinates(
    textureCoordinates  : Float32Array
  ): void
  {
    this.webglRenderingContext.bindBuffer(
      this.webglRenderingContext.ARRAY_BUFFER,
      this.textureCoordinateBuffer
    );

    this.webglRenderingContext.bufferData(
      this.webglRenderingContext.ARRAY_BUFFER,
      textureCoordinates,
      this.webglRenderingContext.STATIC_DRAW
    );

    this.webglRenderingContext.bindBuffer(
      this.webglRenderingContext.ARRAY_BUFFER,
      null
    );
  }
}

export default StandardRen2Buffer;
