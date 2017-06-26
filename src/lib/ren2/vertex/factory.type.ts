import Ren2Vertex from "lib/ren2/vertex.type";

interface Ren2VertexFactory
{
  construct(
    xPosition           : number,
    yPosition           : number,
    uTextureCoordinate  : number,
    vTextureCoordinate  : number
  ): Ren2Vertex;
}

export default Ren2VertexFactory;
