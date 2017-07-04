interface ImageRepository
{
  containsPath(
    path  : string
  ): boolean;

  getImage(
    path  : string
  ): HTMLImageElement;

  storeImage(
    path  : string,
    image : HTMLImageElement
  ): void;
}

export default ImageRepository;
