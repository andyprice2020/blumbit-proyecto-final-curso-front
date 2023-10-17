export class SignupInfo {

  username?: string;
  email?: string;
  password?: string;
  enabled: boolean;
  roles?: string[] = [];

  constructor(
    _username?: string,
    _email?: string,
    _password?: string,
    _enabled?: boolean,
    _roles?: string[]) {
      this.username = _username;
      this.email = _email;
      this.password = _password;
      this.roles = _roles;
    }
}
