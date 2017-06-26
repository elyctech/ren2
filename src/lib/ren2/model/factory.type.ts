import Ren2Model              from "lib/ren2/model.type";
import Ren2TriangleCollection from "lib/ren2/triangle/collection.type";
import Ren2TriangleFactory    from "lib/ren2/triangle/factory.type";
import Ren2Uint16Collection   from "lib/ren2/uint16_collection.type";

interface Ren2ModelFactory
{
  construct(
    indices             : Ren2Uint16Collection,
    layer               : number,
    locationX           : number,
    locationY           : number,
    textureImage        : HTMLImageElement,
    triangleCollection  : Ren2TriangleCollection,
    triangleFactory     : Ren2TriangleFactory
  ): Ren2Model;
}

export default Ren2ModelFactory;
