import Ren2Vertex from "lib/ren2/vertex.type";

interface Ren2Triangle
{
  getVertex1(): Ren2Vertex;

  getVertex2(): Ren2Vertex;

  getVertex3(): Ren2Vertex;
}

export default Ren2Triangle;
