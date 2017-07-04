import ImageRepository from "lib/ren2/image_repository.type";

interface ImageRepositoryFactory
{
  construct(): ImageRepository;
}

export default ImageRepositoryFactory;
