export default class FavoriteAlreadyExists extends Error {
  constructor(userId: string, comicId: number) {
    super(`El usuario con id ${userId} ya tiene el comic ${comicId} como favorito!`);
  }
}