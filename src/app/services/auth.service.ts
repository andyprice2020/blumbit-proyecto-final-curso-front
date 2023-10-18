import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this._http.post(environment.apiAuthUrl + 'signin',{ username, password }, httpOptions);
  }

  logout(): Observable<any> {
    return this._http.post(environment.apiAuthUrl + 'signout', { }, httpOptions);
  }
}
