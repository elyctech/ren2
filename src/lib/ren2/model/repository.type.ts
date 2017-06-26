import Ren2Buffer from "lib/ren2/buffer.type";
import Ren2Model  from "lib/ren2/model.type";

interface Ren2ModelRepository
{
  saveToBuffer(
    model : Ren2Model
  ): Ren2Buffer;
}

export default Ren2ModelRepository;
