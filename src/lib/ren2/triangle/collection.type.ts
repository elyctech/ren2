import Ren2Triangle from "lib/ren2/triangle.type";

interface Ren2TriangleCollection
{
  add(
    triangle  : Ren2Triangle
  ): void;

  count(): number;

  eachTriangle(
    action  : (
      triangle  : Ren2Triangle
    ) => void
  ): void;

  get(
    index : number
  ): Ren2Triangle;
}

export default Ren2TriangleCollection;
