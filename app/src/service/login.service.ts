import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient

  ) { }

  getUser(id: number): Observable<any> {
    return this.http.get(Environment.url +  `user/${id}/`);
  }
}
