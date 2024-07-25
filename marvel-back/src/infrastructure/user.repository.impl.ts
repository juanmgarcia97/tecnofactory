import { injectable } from 'inversify';
import { Repository } from 'typeorm';
import { User } from '../domain/user';
import UserRepository from '../repository/user.repository';
import UserEntity from './persistence/entity/user.entity';
import { AppDataSource } from './persistence/db.config';
import UserNotFound from '../domain/exceptions/userNotFound';
import UserMapper from './persistence/mapper/user.mapper';
import UserAlreadyExists from '../domain/exceptions/userAlreadyExists';
import BadCredentials from '../domain/exceptions/badCredentials';

@injectable()
export default class UserRepositoryImpl implements UserRepository {
  private userRepositoryORM: Repository<UserEntity>;

  constructor() {
    this.userRepositoryORM = AppDataSource.getRepository(UserEntity);
  }

  async create(user: User): Promise<User> {
    if (!user) throw new Error('El usuario no tiene propiedades inválidas');
    const userExists: boolean = await this.userRepositoryORM.exists({ where : { id: user.id }});
    if (userExists) throw new UserAlreadyExists(user.id);
    const userEntity = await this.userRepositoryORM.save(
      UserMapper.toEntity(user)
    );
    return UserMapper.toDomain(userEntity);
  }

  async findById(id: string): Promise<User> {
    const user = await this.userRepositoryORM
      .createQueryBuilder('user')
      .select()
      .where('user.id = :id', { id })
      .getOne();
    if (!user) throw new UserNotFound(id);
    return UserMapper.toDomain(user);
  }

  async login(id: string, email: string): Promise<User> {
    const user = await this.userRepositoryORM
      .createQueryBuilder('user')
      .select()
      .where('user.id = :id', { id })
      .andWhere('user.email = :email', { email })
      .getOne();
    if (!user) throw new BadCredentials();
    return UserMapper.toDomain(user);
  }

  async update(user: User): Promise<User> {
    await this.findById(user.id);
    await this.userRepositoryORM.update(user.id, UserMapper.toEntity(user));
    return user;
  }
}
