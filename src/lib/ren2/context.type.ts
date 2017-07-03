import Ren2Stage  from "lib/ren2/stage.type";

interface Ren2Context
{
  clearCanvas(): void;

  draw(
    stage : Ren2Stage
  ): void;
}

export default Ren2Context;
