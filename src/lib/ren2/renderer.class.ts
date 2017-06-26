import Ren2Buffer   from "lib/ren2/buffer.type";
import Ren2Renderer from "lib/ren2/renderer.type";

class StandardRen2Renderer implements Ren2Renderer
{
  private locationUniformLocation : WebGLUniformLocation;

  private positionAttributeLocation : number;

  private textureCoordinateAttributeLocation  : number;

  private textureUniformLocation  : WebGLUniformLocation;

  constructor(
    private webglProgram          : WebGLProgram,
    private webglRenderingContext : WebGLRenderingContext
  ) {
    // Enable depth testing
    this.webglRenderingContext.enable(
      this.webglRenderingContext.DEPTH_TEST
    );

    // Enable alpha
    this.webglRenderingContext.blendFunc(
      this.webglRenderingContext.SRC_ALPHA,
      this.webglRenderingContext.ONE_MINUS_SRC_ALPHA
    );

    this.webglRenderingContext.enable(
      this.webglRenderingContext.BLEND
    );

    // Clear the color as well as the depth buffer.
    this.webglRenderingContext.clear(
      this.webglRenderingContext.COLOR_BUFFER_BIT |
      this.webglRenderingContext.DEPTH_BUFFER_BIT
    );

    // Get program locations

    this.webglRenderingContext.useProgram(
      this.webglProgram
    );

    this.locationUniformLocation = this.webglRenderingContext.getUniformLocation(
      this.webglProgram,
      "uLocation"
    );

    this.positionAttributeLocation = this.webglRenderingContext.getAttribLocation(
      this.webglProgram,
      "aPosition"
    );

    this.webglRenderingContext.enableVertexAttribArray(
      this.positionAttributeLocation
    );

    this.textureCoordinateAttributeLocation = this.webglRenderingContext.getAttribLocation(
      this.webglProgram,
      "aTextureCoordinate"
    );

    this.webglRenderingContext.enableVertexAttribArray(
      this.textureCoordinateAttributeLocation
    );

    this.textureUniformLocation = this.webglRenderingContext.getUniformLocation(
      this.webglProgram,
      "uTexture"
    );

    this.webglRenderingContext.useProgram(
      null
    );
  }

  draw(
    buffer  : Ren2Buffer
  ): void
  {
    this.webglRenderingContext.useProgram(
      this.webglProgram
    );

    // Model placement on the viewport

    this.webglRenderingContext.uniform2fv(
      this.locationUniformLocation,
      // Should be of length two
      buffer.getLocation()
    );

    // Model vertex positions

    this.webglRenderingContext.bindBuffer(
      this.webglRenderingContext.ARRAY_BUFFER,
      buffer.getPositionBuffer()
    );

    this.webglRenderingContext.vertexAttribPointer(
      this.positionAttributeLocation,
      3, this.webglRenderingContext.FLOAT, false, 0, 0
    );

    // Model Texture Coordinates

    this.webglRenderingContext.bindBuffer(
      this.webglRenderingContext.ARRAY_BUFFER,
      buffer.getTextureCoordinateBuffer()
    );

    this.webglRenderingContext.vertexAttribPointer(
      this.textureCoordinateAttributeLocation,
      2, this.webglRenderingContext.FLOAT, false, 0, 0
    );

    // Model Texture

    this.webglRenderingContext.activeTexture(
      this.webglRenderingContext.TEXTURE0
    );

    this.webglRenderingContext.bindTexture(
      this.webglRenderingContext.TEXTURE_2D,
      buffer.getTexture()
    );

    this.webglRenderingContext.uniform1i(
      this.textureUniformLocation,
      0
    );

    // Draw model by indices

    this.webglRenderingContext.bindBuffer(
      this.webglRenderingContext.ELEMENT_ARRAY_BUFFER,
      buffer.getIndexBuffer()
    );

    this.webglRenderingContext.drawElements(
      this.webglRenderingContext.TRIANGLES,
      buffer.getIndexCount(),
      this.webglRenderingContext.UNSIGNED_SHORT,
      0
    );

    this.webglRenderingContext.useProgram(
      null
    );
  }
}

export default StandardRen2Renderer;
