import Ren2Triangle         from "lib/ren2/triangle.type";
import Ren2TriangleFactory  from "lib/ren2/triangle/factory.type";
import Ren2Vertex           from "lib/ren2/vertex.type";
import StandardRen2Triangle from "lib/ren2/triangle.class";

class StandardRen2TriangleFactory implements Ren2TriangleFactory
{
  construct(
    vertex1 : Ren2Vertex,
    vertex2 : Ren2Vertex,
    vertex3 : Ren2Vertex
  ) : Ren2Triangle
  {
    return new StandardRen2Triangle(
      vertex1,
      vertex2,
      vertex3
    );
  }
}

export default StandardRen2TriangleFactory;
