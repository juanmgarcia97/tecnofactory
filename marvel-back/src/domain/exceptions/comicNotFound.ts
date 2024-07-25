export default class ComicNotFound extends Error {
  constructor(id: number) {
    super(`El comic con id ${id} no existe!`);
  }
}