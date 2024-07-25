import { Request, Response as ExpressResponse } from 'express';
import { inject } from 'inversify';
import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
  httpPut,
  request,
  requestParam,
  response,
} from 'inversify-express-utils';
import { DI } from '../domain/types';
import UserService from '../services/user.service';
import Response from './response';
import { User } from '../domain/user';
import UserNotFound from '../domain/exceptions/userNotFound';
import BadCredentials from '../domain/exceptions/badCredentials';
import UserAlreadyExists from '../domain/exceptions/userAlreadyExists';

@controller('/users')
export default class UserController extends BaseHttpController {
  constructor(@inject(DI.UserService) private userService: UserService) {
    super();
  }

  @httpGet('/:id')
  private async findById(
    @requestParam('id') id: string,
    @response() res: ExpressResponse
  ) {
    try {
      const user = await this.userService.findById(id);
      Response.ok(res, user, 'Usuario obtenido satisfactoriamente');
    } catch (err) {
      if (err instanceof UserNotFound) {
        Response.notFound(res, err.message);
      } else {
        Response.internal(res);
      }
    }
  }

  @httpPost('/login')
  private async login(
    @request() req: Request,
    @requestParam('email') email: string,
    @response() res: ExpressResponse
  ) {
    try {
      const user = await this.userService.login(req.body.id, req.body.email);
      Response.ok(res, user, 'Usuario obtenido satisfactoriamente');
    } catch (err) {
      if (err instanceof BadCredentials) {
        Response.badCredentials(res, err.message);
      } else {
        Response.internal(res);
      }
    }
  }

  @httpPost('/')
  private async create(
    @request() req: Request,
    @response() res: ExpressResponse
  ) {
    const userObject: User = {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
    };
    try {
      const user = await this.userService.create(userObject);
      Response.created(res, user, 'Usuario creado satisfactoriamente');
    } catch (err) {
      if (err instanceof UserAlreadyExists) {
        Response.conflict(res, err.message);
      } else {
        Response.internal(res);
      }
    }
  }

  @httpPut('/')
  private async update(
    @request() req: Request,
    @response() res: ExpressResponse
  ) {
    const userObject: User = {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      comics: req.body.comics,
    };
    try {
      const user = await this.userService.update(userObject);
      Response.ok(res, user, 'Usuario actualizado satisfactoriamente');
    } catch (err) {
      if (err instanceof UserNotFound) {
        Response.notFound(res, err.message);
      } else {
        Response.internal(res);
      }
    }
  }
}
