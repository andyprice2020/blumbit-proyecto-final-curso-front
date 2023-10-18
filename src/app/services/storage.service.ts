import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // Methods
  // Clean credentials
  clean(): void {
    window.sessionStorage.clear();
  }

  // Save User
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  // Verificar si esta logueado
  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    // Si tiene datos el usuario devolvemos verdadero
    if (user) { return true;}

    return false;
  }
}
