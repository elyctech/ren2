import Ren2ModelBufferMap         from "lib/ren2/model_buffer_map.type";
import Ren2ModelBufferMapFactory  from "lib/ren2/model_buffer_map/factory.type";
import StandardRen2ModelBufferMap from "lib/ren2/model_buffer_map.class";

class StandardRen2ModelBufferMapFactory implements Ren2ModelBufferMapFactory
{
  construct(): Ren2ModelBufferMap
  {
    return new StandardRen2ModelBufferMap();
  }
}

export default StandardRen2ModelBufferMapFactory;
