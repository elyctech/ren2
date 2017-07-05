import Ren2Model    from "lib/ren2/model.type";
import Ren2Stage    from "lib/ren2/stage.type";
import Ren2Vertex   from "lib/ren2/vertex.type";

interface Ren2Service
{
  clear(
    canvas  : HTMLCanvasElement
  ): void;

  createModel(
    layer         : number,
    locationX     : number,
    locationY     : number,
    textureImage  : HTMLImageElement
  ): Ren2Model;

  createVertex(
    xPosition           : number,
    yPosition           : number,
    uTextureCoordinate  : number,
    vTextureCoordinate  : number
  ): Ren2Vertex;

  loadImage(
    path  : string
  ): Promise<HTMLImageElement>;

  loadImages(
    path  : Array<string>
  ): Promise<Array<HTMLImageElement>>;

  render(
    canvas  : HTMLCanvasElement,
    stage   : Ren2Stage
  ): void;
}

export default Ren2Service;
