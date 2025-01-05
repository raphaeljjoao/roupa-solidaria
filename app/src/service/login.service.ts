import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../app/environment/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient

  ) { }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(Environment.url +  `user/${id}/`);
  }
}
