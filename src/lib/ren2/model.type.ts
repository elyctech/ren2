import Ren2Triangle         from "lib/ren2/triangle.type";
import Ren2Uint16Collection from "lib/ren2/uint16_collection.type";
import Ren2Vertex           from "lib/ren2/vertex.type";

interface Ren2Model
{
  addTriangle(
    vertex1 : Ren2Vertex,
    vertex2 : Ren2Vertex,
    vertex3 : Ren2Vertex
  ) : this;

  getIndices(): Ren2Uint16Collection;

  getLayer(): number;

  getLocationX(): number;

  getLocationY(): number;

  getPositions(): Float32Array;

  getTextureImage(): HTMLImageElement;

  getTriangle(
    index : number
  ) : Ren2Triangle;

  getTextureCoordinates(): Float32Array;
}

export default Ren2Model;
