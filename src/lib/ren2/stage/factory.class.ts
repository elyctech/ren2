import Ren2ModelCollection  from "lib/ren2/model/collection.type";
import Ren2Stage            from "lib/ren2/stage.type";
import Ren2StageFactory     from "lib/ren2/stage/factory.type";
import StandardRen2Stage    from "lib/ren2/stage.class";

class StandardRen2StageFactory implements Ren2StageFactory
{
  construct(
    models  : Ren2ModelCollection
  ): Ren2Stage
  {
    return new StandardRen2Stage(
      models
    );
  }
}

export default StandardRen2StageFactory;
