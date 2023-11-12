export class APIError extends Error {
  statusCode: number;

  info: string | Record<string, string>;

  constructor(
    message: string,
    statusCode: number,
    info: string | Record<string, string>
  ) {
    super(message);

    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.info = info;
  }
}
