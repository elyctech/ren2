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

  render(
    canvas  : HTMLCanvasElement,
    // TODO Redesign "Ren2Stage"
    stage   : Ren2Stage
  ): void;
}

export default Ren2Service;
