import Ren2Model            from "lib/ren2/model.type";
import Ren2ModelCollection  from "lib/ren2/model/collection.type";
import Ren2Stage            from "lib/ren2/stage.type";

class StandardRen2Stage implements Ren2Stage
{
  constructor(
    private models  : Ren2ModelCollection
  ) {

  }

  addModel(
    model : Ren2Model
  ): this
  {
    this.models.add(model);

    return this;
  }

  eachModel(
    action  : (
      model : Ren2Model
    ) => void
  ): void
  {
    this.models.eachModel(action);
  }
}

export default StandardRen2Stage;
