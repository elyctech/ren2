interface Ren2Vertex
{
  getPositionX(): number;

  getPositionY(): number;

  getTextureCoordinateS(): number;

  getTextureCoordinateT(): number;

  setTextureCoordinate(
    textureCoordinateS  : number,
    textureCoordinateT  : number
  ): void;
}

export default Ren2Vertex;
