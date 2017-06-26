import Ren2Model  from "lib/ren2/model.type";

interface Ren2Stage
{
  addModel(
    model : Ren2Model
  ): this;

  eachModel(
    action  : (
      model : Ren2Model
    ) => void
  ): void;
}

export default Ren2Stage;
