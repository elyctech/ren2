import Ren2Uint16Collection from "lib/ren2/uint16_collection.type";

class StandardRen2Uint16Collection implements Ren2Uint16Collection
{
  private changed: boolean;

  private numbers : Array<number>;

  constructor()
  {
    this.numbers = new Array<number>();
  }

  add(
    uint16  : number
  ): void
  {
    this.numbers.push(uint16);

    this.changed = true;
  }

  asArray(): Uint16Array
  {
    return Uint16Array.from(this.numbers);
  }

  count(): number
  {
    return this.numbers.length;
  }

  hasChanged(): boolean
  {
    return this.changed;
  }

  resetChanged(): void
  {
    this.changed = false;
  }
}

export default StandardRen2Uint16Collection;
