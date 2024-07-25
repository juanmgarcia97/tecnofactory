export default class BadCredentials extends Error {
  constructor() {
    super('Las credenciales ingresadas no son válidas!');
  }
}