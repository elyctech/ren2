import Ren2Model              from "lib/ren2/model.type";
import Ren2Triangle           from "lib/ren2/triangle.type";
import Ren2TriangleCollection from "lib/ren2/triangle/collection.type";
import Ren2TriangleFactory    from "lib/ren2/triangle/factory.type";
import Ren2Uint16Collection   from "lib/ren2/uint16_collection.type";
import Ren2Vertex             from "lib/ren2/vertex.type";

class StandardRen2Model implements Ren2Model
{
  constructor(
    private indices             : Ren2Uint16Collection,
    private layer               : number,
    private locationX           : number,
    private locationY           : number,
    private textureImage        : HTMLImageElement,
    private triangleCollection  : Ren2TriangleCollection,
    private triangleFactory     : Ren2TriangleFactory
  ) {

  }

  addTriangle(
    vertex1 : Ren2Vertex,
    vertex2 : Ren2Vertex,
    vertex3 : Ren2Vertex
  ) : Ren2Triangle
  {
    const indexCount  = this.indices.count(),
          triangle    = this.triangleFactory.construct(
            vertex1,
            vertex2,
            vertex3
          );

    this.indices.add(
      indexCount
    );

    this.indices.add(
      indexCount + 1
    );

    this.indices.add(
      indexCount + 2
    );

    this.triangleCollection.add(triangle);

    return triangle;
  }

  getIndices(): Ren2Uint16Collection
  {
    return this.indices;
  }

  getLocationX(): number
  {
    return this.locationX;
  }

  getLocationY(): number
  {
    return this.locationY;
  }

  getPositions(): Float32Array
  {
    const positions = new Array<number>();

    this.triangleCollection.eachTriangle((triangle) =>
    {
      const vertex1 = triangle.getVertex1(),
            vertex2 = triangle.getVertex2(),
            vertex3 = triangle.getVertex3();

      positions.push(
        vertex1.getPositionX(),
        vertex1.getPositionY(),
        // TODO This will need to be divided by the number of layers.
        -this.layer,
        vertex2.getPositionX(),
        vertex2.getPositionY(),
        -this.layer,
        vertex3.getPositionX(),
        vertex3.getPositionY(),
        -this.layer
      )
    });

    return Float32Array.from(positions);
  }

  getTextureImage(): HTMLImageElement
  {
    return this.textureImage;
  }

  getTriangle(
    index : number
  ) : Ren2Triangle
  {
    return this.triangleCollection.get(index);
  }

  getTextureCoordinates(): Float32Array
  {
    const textureCoordinates = new Array<number>();

    this.triangleCollection.eachTriangle((triangle) =>
    {
      const vertex1 = triangle.getVertex1(),
            vertex2 = triangle.getVertex2(),
            vertex3 = triangle.getVertex3();

      textureCoordinates.push(
        vertex1.getTextureCoordinateS(),
        vertex1.getTextureCoordinateT(),
        vertex2.getTextureCoordinateS(),
        vertex2.getTextureCoordinateT(),
        vertex3.getTextureCoordinateS(),
        vertex3.getTextureCoordinateT()
      )
    });

    return Float32Array.from(textureCoordinates);
  }
}

export default StandardRen2Model;
