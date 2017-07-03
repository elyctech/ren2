import Ren2Buffer from "lib/ren2/buffer.type";
import Ren2Model  from "lib/ren2/model.type";

interface Ren2ModelRepository
{
  containsBuffer(
    model : Ren2Model
  ): boolean;

  getBuffer(
    model : Ren2Model
  ): Ren2Buffer;

  saveToBuffer(
    model : Ren2Model
  ): Ren2Buffer;
}

export default Ren2ModelRepository;
