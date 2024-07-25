export default class NoComics extends Error {
  constructor() {
    super('No hay comics por ver');
  }
}
