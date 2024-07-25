import UserComic from '../../../domain/user-comic';
import UserComicEntity from '../entity/user-comic.entity';

export default class UserComicMapper {
  static toDomain(entity: UserComicEntity): UserComic {
    return {
      userId: entity.userId,
      comicId: entity.comicId
    }
  }

  static toEntity(domain: UserComic): UserComicEntity {
    const entity = new UserComicEntity();
    entity.userId = domain.userId;
    entity.comicId = domain.comicId;
    return entity;
  }

  static toDomainList(entities: UserComicEntity[]): UserComic[] {
    return entities.map(this.toDomain);
  }
}