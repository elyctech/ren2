import Ren2Buffer from "lib/ren2/buffer.type";

interface Ren2BufferFactory
{
  construct(
    indexBuffer             : WebGLBuffer,
    indexCount              : number,
    layer                   : number,
    location                : Float32Array,
    positionBuffer          : WebGLBuffer,
    texture                 : WebGLTexture,
    textureCoordinateBuffer : WebGLBuffer,
    webglRenderingContext   : WebGLRenderingContext
  ): Ren2Buffer;
}

export default Ren2BufferFactory;
