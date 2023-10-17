export class User {
  userId?: string;
  username?: string;
  email?: string;
  password?: string;
  enabled: boolean;
  roles?: string[] = [];

  // Se debe inicializar la clase mediante un constructor
  constructor(
    _userId?: string,
    _username?: string,
    _email?: string,
    _password?: string,
    _enabled?: boolean,
    _roles?: string[]) {
      this.userId = _userId;
      this.username = _username;
      this.email = _email;
      this.password = _password;
      this.roles = _roles;
    }
}
