import Ren2Buffer         from "lib/ren2/buffer.type";
import Ren2Model          from "lib/ren2/model.type";
import Ren2ModelBufferMap from "lib/ren2/model_buffer_map.type";

class StandardRen2ModelBufferMap implements Ren2ModelBufferMap
{
  private modelBufferMap: Map<Ren2Model, Ren2Buffer>;

  constructor()
  {
    this.modelBufferMap = new Map<Ren2Model, Ren2Buffer>();
  }

  contains(
    model : Ren2Model
  ): boolean
  {
    return this.modelBufferMap.has(model);
  }

  each(
    action  : (
      model   : Ren2Model,
      buffer  : Ren2Buffer
    ) => void
  ): void
  {
    for (let [model, buffer] of this.modelBufferMap.entries())
    {
      action(model, buffer);
    }
  }

  get(
    model : Ren2Model
  ): Ren2Buffer
  {
    return this.modelBufferMap.get(model);
  }

  set(
    model   : Ren2Model,
    buffer  : Ren2Buffer
  ): void
  {
    this.modelBufferMap.set(model, buffer);
  }
}

export default StandardRen2ModelBufferMap;
