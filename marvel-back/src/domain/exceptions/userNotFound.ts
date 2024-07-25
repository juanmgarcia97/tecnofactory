export default class UserNotFound extends Error {
  constructor(id: string) {
    super(`El usuario con id ${id} no existe!`);
  }
}