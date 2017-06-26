import Ren2Model  from "lib/ren2/model.type";

interface ModelCollection
{
  add(
    model : Ren2Model
  ): void;

  eachModel(
    action  : (
      model : Ren2Model
    ) => void
  ): void;
}

export default ModelCollection;
