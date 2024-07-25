import { Container } from 'inversify';
import UserRepository from './repository/user.repository';
import { DI } from './domain/types';
import UserRepositoryImpl from './infrastructure/user.repository.impl';
import UserService from './services/user.service';
import UserServiceImpl from './services/user.service.impl';
import ComicService from './services/comic.service';
import ComicServiceImpl from './services/comic.service.impl';
import ComicRepository from './repository/comic.repository';
import ComicRepositoryImpl from './infrastructure/comic.repository.impl';
import UserComicRepository from './repository/user-comic.repository';
import UserComicRepositoryImpl from './infrastructure/user-comic.repository.impl';
import UserComicService from './services/user-comic.service';
import UserComicServiceImpl from './services/user-comic.service.impl';
export const container = new Container();

container.bind<UserRepository>(DI.UserRepository).to(UserRepositoryImpl);
container.bind<UserService>(DI.UserService).to(UserServiceImpl);
container.bind<ComicRepository>(DI.ComicRepository).to(ComicRepositoryImpl);
container.bind<ComicService>(DI.ComicService).to(ComicServiceImpl);
container
  .bind<UserComicRepository>(DI.UserComicRepository)
  .to(UserComicRepositoryImpl);
container.bind<UserComicService>(DI.UserComicService).to(UserComicServiceImpl);
