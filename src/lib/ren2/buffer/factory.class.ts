import Ren2Buffer         from "lib/ren2/buffer.type";
import Ren2BufferFactory  from "lib/ren2/buffer/factory.type";
import StandardRen2Buffer from "lib/ren2/buffer.class";

class StandardRen2BufferFactory implements Ren2BufferFactory
{
  construct(
    indexBuffer             : WebGLBuffer,
    indexCount              : number,
    location                : Float32Array,
    positionBuffer          : WebGLBuffer,
    texture                 : WebGLTexture,
    textureCoordinateBuffer : WebGLBuffer,
    webglRenderingContext   : WebGLRenderingContext
  ): Ren2Buffer
  {
    return new StandardRen2Buffer(
      indexBuffer,
      indexCount,
      location,
      positionBuffer,
      texture,
      textureCoordinateBuffer,
      webglRenderingContext
    );
  }
}

export default StandardRen2BufferFactory;
