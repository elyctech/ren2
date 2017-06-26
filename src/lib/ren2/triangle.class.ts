import Ren2Triangle from "lib/ren2/triangle.type";
import Ren2Vertex   from "lib/ren2/vertex.type";

class StandardRen2Triangle implements Ren2Triangle
{
  constructor(
    private vertex1 : Ren2Vertex,
    private vertex2 : Ren2Vertex,
    private vertex3 : Ren2Vertex
  ) {

  }

  getVertex1(): Ren2Vertex
  {
    return this.vertex1;
  }

  getVertex2(): Ren2Vertex
  {
    return this.vertex2;
  }

  getVertex3(): Ren2Vertex
  {
    return this.vertex3;
  }
}

export default StandardRen2Triangle;
