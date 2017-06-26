import Ren2Context          from "lib/ren2/context.type";
import Ren2Model            from "lib/ren2/model.type";
import Ren2ModelRepository  from "lib/ren2/model/repository.type";
import Ren2Renderer         from "lib/ren2/renderer.type";

class StandardRen2Context implements Ren2Context
{
  constructor(
    private modelRepository       : Ren2ModelRepository,
    private renderer              : Ren2Renderer,
    private webglRenderingContext : WebGLRenderingContext
  ) {

  }

  clearCanvas(): void
  {
    this.webglRenderingContext.clear(
      this.webglRenderingContext.COLOR_BUFFER_BIT |
      this.webglRenderingContext.DEPTH_BUFFER_BIT
    )
  }

  draw(
    model : Ren2Model
  ): void
  {
    const buffer  = this.modelRepository.saveToBuffer(
            model
          );

    this.renderer.draw(
      buffer
    );
  }
}

export default StandardRen2Context;
