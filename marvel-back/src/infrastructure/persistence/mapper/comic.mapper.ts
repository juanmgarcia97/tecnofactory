import { Comic } from '../../../domain/comic';
import ComicEntity from '../entity/comic.entity';

export default class ComicMapper {
  static toDomain(entity: ComicEntity): Comic {
    return {
      id: entity.id,
      title: entity.title,
      imageUrl: entity.imageUrl,
      description: entity.description,
      price: entity.price,
      creators: entity.creators
    }
  }

  static toEntity(domain: Comic): ComicEntity {
    const entity = new ComicEntity();
    entity.id = domain.id;
    entity.title = domain.title;
    entity.imageUrl = domain.imageUrl;
    entity.description = domain.description;
    entity.price = domain.price;
    entity.creators = domain.creators;
    return entity;
  }

  static toDomainList(entities: ComicEntity[]): Comic[] {
    return entities.map(this.toDomain);
  }
}