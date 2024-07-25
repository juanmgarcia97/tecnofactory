export default class UserAlreadyExists extends Error {
  constructor(id: string) {
    super(`El usuario con id ${id} ya se encuentra registrado!`);
  }
}