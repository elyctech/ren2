import Ren2Uint16Collection         from "lib/ren2/uint16_collection.type";
import Ren2Uint16CollectionFactory  from "lib/ren2/uint16_collection/factory.type";
import StandardRen2Uint16Collection from "lib/ren2/uint16_collection.class";

class StandardRen2Uint16CollectionFactory implements Ren2Uint16CollectionFactory
{
  construct(): Ren2Uint16Collection
  {
    return new StandardRen2Uint16Collection();
  }
}

export default StandardRen2Uint16CollectionFactory;
