import Ren2Triangle           from "lib/ren2/triangle.type";
import Ren2TriangleCollection from "lib/ren2/triangle/collection.type";

class StandardRen2TriangleCollection implements Ren2TriangleCollection
{
  private triangles: Array<Ren2Triangle>;

  constructor()
  {
    this.triangles = new Array<Ren2Triangle>();
  }

  add(
    triangle  : Ren2Triangle
  ): void
  {
    this.triangles.push(triangle);
  }

  count(): number
  {
    return this.triangles.length;
  }

  eachTriangle(
    action  : (
      triangle  : Ren2Triangle
    ) => void
  ): void
  {
    for (let triangle of this.triangles)
    {
      action(triangle);
    }
  }

  get(
    index : number
  ): Ren2Triangle
  {
    return this.triangles[index];
  }
}

export default StandardRen2TriangleCollection;
