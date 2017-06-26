import Ren2TriangleCollection         from "lib/ren2/triangle/collection.type";
import Ren2TriangleCollectionFactory  from "lib/ren2/triangle/collection/factory.type";
import StandardRen2TriangleCollection from "lib/ren2/triangle/collection.class";

class StandardRen2TriangleCollectionFactory implements Ren2TriangleCollectionFactory
{
  construct(): Ren2TriangleCollection
  {
    return new StandardRen2TriangleCollection();
  }
}

export default StandardRen2TriangleCollectionFactory;
