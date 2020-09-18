export class ServiceBase {
  protected token?: string | null;

  constructor() {
    this.token = null;
  }

  setToken(token) {
    this.token = token;
  }
}
