import { Response as ExpressResponse } from 'express';

export default class Response {
  static ok<T>(res: ExpressResponse, data?: T, message?: string) {
    res.status(200).json({ message, data });
  }

  static created<T>(res: ExpressResponse, data?: T, message?: string) {
    res.status(201).json({ message, data });
  }

  static noContent(res: ExpressResponse, message?: string) {
    res.status(204).json({ message });
  }

  static badRequest(res: ExpressResponse, message?: string) {
    res.status(400).json({ message });
  }

  static badCredentials(res: ExpressResponse, message?: string) {
    res.status(401).json({ message });
  }

  static notFound(res: ExpressResponse, message?: string) {
    res.status(404).json({ message });
  }

  static conflict(res: ExpressResponse, message?: string) {
    res.status(409).json({ message });
  }
  
  static internal(res: ExpressResponse) {
    res.status(500).json({ message: 'Error interno de la aplicación' });
  }
}
