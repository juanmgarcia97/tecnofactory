import { inject, injectable } from 'inversify';
import { User } from '../domain/user';
import UserService from './user.service';
import { DI } from '../domain/types';
import UserRepository from '../repository/user.repository';

@injectable()
export default class UserServiceImpl implements UserService {
  @inject(DI.UserRepository) userRepository!: UserRepository;

  create(user: User): Promise<User> {
    return this.userRepository.create(user);
  }

  findById(id: string): Promise<User> {
    return this.userRepository.findById(id);
  }

  login(id: string, email: string): Promise<User> {
    return this.userRepository.login(id, email);
  }

  update(user: User): Promise<User> {
    return this.userRepository.update(user);
  }
}
