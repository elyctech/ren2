import Ren2ModelCollection  from "lib/ren2/model/collection.type";
import Ren2Stage            from "lib/ren2/stage.type";

interface Ren2StageFactory
{
  construct(
    models  : Ren2ModelCollection
  ): Ren2Stage;
}

export default Ren2StageFactory;
