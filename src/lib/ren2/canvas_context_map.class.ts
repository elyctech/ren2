import Ren2CanvasContextMap from "lib/ren2/canvas_context_map.type";
import Ren2Context          from "lib/ren2/context.type";

class StandardRen2CanvasContextMap implements Ren2CanvasContextMap
{
  private canvasContexts  : Map<HTMLCanvasElement, Ren2Context>;

  constructor()
  {
    this.canvasContexts = new Map<HTMLCanvasElement, Ren2Context>();
  }

  contains(
    canvas  : HTMLCanvasElement
  ): boolean
  {
    return this.canvasContexts.has(canvas);
  }

  get(
    canvas  : HTMLCanvasElement
  ): Ren2Context
  {
    return this.canvasContexts.get(canvas);
  }

  set(
    canvas  : HTMLCanvasElement,
    context : Ren2Context
  ): void
  {
    this.canvasContexts.set(canvas, context);
  }
}

export default StandardRen2CanvasContextMap;
