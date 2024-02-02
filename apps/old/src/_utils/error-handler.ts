export class NotFoundError extends Error {
  constructor() {
    super('not found');
  }
}