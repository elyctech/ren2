import Ren2Model            from "lib/ren2/model.type";
import Ren2ModelCollection  from "lib/ren2/model/collection.type";

class StandardRen2ModelCollection implements Ren2ModelCollection
{
  private models  : Array<Ren2Model>;

  constructor()
  {
    this.models = new Array<Ren2Model>();
  }

  add(
    model : Ren2Model
  ): void
  {
    this.models.push(model);
  }

  eachModel(
    action  : (
      model : Ren2Model
    ) => void
  ): void
  {
    for (let model of this.models)
    {
      action(model);
    }
  }
}

export default StandardRen2ModelCollection;
