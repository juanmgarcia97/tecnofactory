import { User } from '../domain/user';

export default interface UserService {
  create(user: User): Promise<User>;
  findById(id: string): Promise<User>;
  login(id: string, email: string): Promise<User>;
  update(user: User): Promise<User>;
}