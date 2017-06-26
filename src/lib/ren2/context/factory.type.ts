import Ren2Context from "lib/ren2/context.type";

interface Ren2ContextFactory
{
  construct(
    canvas  : HTMLCanvasElement
  ): Ren2Context;
}

export default Ren2ContextFactory;
