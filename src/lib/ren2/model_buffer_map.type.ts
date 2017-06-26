import Ren2Buffer from "lib/ren2/buffer.type";
import Ren2Model  from "lib/ren2/model.type";

interface Ren2ModelBufferMap
{
  contains(
    model : Ren2Model
  ): boolean;

  each(
    action  : (
      model   : Ren2Model,
      buffer  : Ren2Buffer
    ) => void
  ): void;

  get(
    model : Ren2Model
  ): Ren2Buffer;

  set(
    model   : Ren2Model,
    buffer  : Ren2Buffer
  ): void;
}

export default Ren2ModelBufferMap;
