import Ren2Buffer from "lib/ren2/buffer.type";

interface Ren2Renderer
{
  draw(
    buffer  : Ren2Buffer
  ): void;
}

export default Ren2Renderer;
