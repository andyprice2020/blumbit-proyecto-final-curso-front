import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  // Obtain the public, user and mod content
  getPublicContent(): Observable<any> {
    return this.http.get(environment.apiTestUrl + 'all', { responseType: 'text'});
  }

  getUserBoard(): Observable<any> {
    return this.http.get(environment.apiTestUrl + 'user', { responseType: 'text'});
  }
  getModerator(): Observable<any> {
    return this.http.get(environment.apiTestUrl + 'mod', { responseType: 'text'});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(environment.apiTestUrl + 'admin', { responseType: 'text'});
  }
}
