import Ren2Model  from "lib/ren2/model.type";

interface Ren2Context
{
  clearCanvas(): void;

  draw(
    model : Ren2Model
  ): void;
}

export default Ren2Context;
