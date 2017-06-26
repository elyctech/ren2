import Ren2Context  from "lib/ren2/context.type";

interface Ren2CanvasContextMap
{
  contains(
    canvas  : HTMLCanvasElement
  ): boolean;

  get(
    canvas  : HTMLCanvasElement
  ): Ren2Context;

  set(
    canvas  : HTMLCanvasElement,
    context : Ren2Context
  ): void;
}

export default Ren2CanvasContextMap;
