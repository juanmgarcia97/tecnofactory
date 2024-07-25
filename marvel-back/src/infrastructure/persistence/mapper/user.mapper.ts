import { User } from '../../../domain/user';
import UserEntity from '../entity/user.entity';

export default class UserMapper {
  static toDomain(entity: UserEntity): User {
    return {
      id: entity.id,
      name: entity.name,
      email: entity.email,
    }
  }

  static toEntity(domain: User): UserEntity {
    const entity = new UserEntity();
    entity.id = domain.id;
    entity.name = domain.name;
    entity.email = domain.email;
    return entity;
  }
}