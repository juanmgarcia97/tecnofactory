import { inject } from 'inversify';
import {
  BaseHttpController,
  controller,
  httpDelete,
  httpGet,
  httpPost,
  requestParam,
  response,
} from 'inversify-express-utils';
import { DI } from '../domain/types';
import UserComicService from '../services/user-comic.service';
import { Response as ExpressResponse } from 'express';
import Response from './response';

@controller('/favorites')
export default class UserComicController extends BaseHttpController {
  constructor(
    @inject(DI.UserComicService) private userComicService: UserComicService
  ) {
    super();
  }

  @httpPost('/:userId/:comicId')
  private async saveFavorite(
    @requestParam('userId') userId: string,
    @requestParam('comicId') comicId: number,
    @response() res: ExpressResponse
  ) {
    const favorite = await this.userComicService.create(userId, comicId);
    Response.created(
      res,
      favorite,
      'Comic favorito guardado satisfactoriamente'
    );
  }

  @httpDelete('/:userId/:comicId')
  private async deleteFavorite(
    @requestParam('userId') userId: string,
    @requestParam('comicId') comicId: number,
    @response() res: ExpressResponse
  ) {
    await this.userComicService.delete(userId, comicId);
    Response.ok(
      res,
      null,
      'Comic favorito eliminado satisfactoriamente'
    );
  }

  @httpGet('/:id')
  private async findAllByUserId(
    @requestParam('id') id: string,
    @response() res: ExpressResponse
  ) {
    const favorites = await this.userComicService.findAllByUserId(id);
    Response.ok(
      res,
      favorites,
      'Comics favoritos obtenidos satisfactoriamente'
    );
  }
}
