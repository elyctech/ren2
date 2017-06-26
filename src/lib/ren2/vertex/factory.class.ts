import Ren2VertexFactory  from "lib/ren2/vertex/factory.type";
import Ren2Vertex         from "lib/ren2/vertex.type";
import StandardRen2Vertex from "lib/ren2/vertex.class";

class StandardRen2VertexFactory implements Ren2VertexFactory
{
  construct(
    xPosition           : number,
    yPosition           : number,
    uTextureCoordinate  : number,
    vTextureCoordinate  : number
  ): Ren2Vertex
  {
    return new StandardRen2Vertex(
      xPosition,
      yPosition,
      uTextureCoordinate,
      vTextureCoordinate
    );
  }
}

export default StandardRen2VertexFactory;
