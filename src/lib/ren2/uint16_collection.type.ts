interface Ren2Uint16Collection
{
  add(
    uint16  : number
  ): void;

  asArray(): Uint16Array;

  count(): number;

  hasChanged(): boolean;

  resetChanged(): void;
}

export default Ren2Uint16Collection;
