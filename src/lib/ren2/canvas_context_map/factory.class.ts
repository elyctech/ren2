import Ren2CanvasContextMap         from "lib/ren2/canvas_context_map.type";
import Ren2CanvasContextMapFactory  from "lib/ren2/canvas_context_map/factory.type";
import StandardRen2CanvasContextMap from "lib/ren2/canvas_context_map.class";

class StandardRen2CanvasContextMapFactory implements Ren2CanvasContextMapFactory
{
  construct(): Ren2CanvasContextMap
  {
    return new StandardRen2CanvasContextMap();
  }
}

export default StandardRen2CanvasContextMapFactory;
