import ImageRepository         from "lib/ren2/image_repository.type";
import ImageRepositoryFactory  from "lib/ren2/image_repository/factory.type";
import StandardImageRepository from "lib/ren2/image_repository.class";

class StandardImageRepositoryFactory implements ImageRepositoryFactory
{
  construct(): ImageRepository
  {
    return new StandardImageRepository();
  }
}

export default StandardImageRepositoryFactory;
