import Ren2Triangle from "lib/ren2/triangle.type";
import Ren2Vertex   from "lib/ren2/vertex.type";

interface Ren2TriangleFactory
{
  construct(
    vertex1 : Ren2Vertex,
    vertex2 : Ren2Vertex,
    vertex3 : Ren2Vertex
  ) : Ren2Triangle;
}

export default Ren2TriangleFactory;
