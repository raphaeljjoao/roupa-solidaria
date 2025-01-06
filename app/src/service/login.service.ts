import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../app/environment/environment';
import { User } from '../models/User';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(Environment.url +  `user/${id}/`);
  }

  logout() {
    this.localStorageService.logout();
    this.router.navigate(['/']);
  }
}
