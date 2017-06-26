import Ren2Vertex                             from "lib/ren2/vertex.type";

class StandardRen2Vertex implements Ren2Vertex
{
  constructor(
    private positionX           : number,
    private positionY           : number,
    private textureCoordinateS  : number,
    private textureCoordinateT  : number
  ) {

  }

  getPositionX(): number
  {
    return this.positionX;
  }

  getPositionY(): number
  {
    return this.positionY;
  }

  getTextureCoordinateS(): number
  {
    return this.textureCoordinateS;
  }

  getTextureCoordinateT(): number
  {
    return this.textureCoordinateT;
  }

  setTextureCoordinate(
    textureCoordinateS  : number,
    textureCoordinateT  : number
  ): void
  {
    this.textureCoordinateS = textureCoordinateS;
    this.textureCoordinateT = textureCoordinateT;
  }
}

export default StandardRen2Vertex;
