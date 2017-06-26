import Ren2ModelColletion         from "lib/ren2/model/collection.type";
import Ren2ModelColletionFactory  from "lib/ren2/model/collection/factory.type";
import StandardRen2ModelColletion from "lib/ren2/model/collection.class";

class StandardRen2ModelColletionFactory implements Ren2ModelColletionFactory
{
  construct(): Ren2ModelColletion
  {
    return new StandardRen2ModelColletion();
  }
}

export default StandardRen2ModelColletionFactory;
