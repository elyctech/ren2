import ImageRepository from "lib/ren2/image_repository.type";

class StandardImageRepository implements ImageRepository
{
  private imageMap  : Map<string, HTMLImageElement>;

  constructor()
  {
    this.imageMap = new Map<string, HTMLImageElement>();
  }

  containsPath(
    path  : string
  ): boolean
  {
    return this.imageMap.has(path);
  }

  getImage(
    path  : string
  ): HTMLImageElement
  {
    return this.imageMap.get(path);
  }

  storeImage(
    path  : string,
    image : HTMLImageElement
  ): void
  {
    this.imageMap.set(path, image);
  }
}

export default StandardImageRepository;
