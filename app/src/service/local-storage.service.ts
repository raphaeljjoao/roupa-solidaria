import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public login(user: User): void {
    localStorage.setItem('user_id', user.id.toString());
  }

  public logout(): void {
    localStorage.removeItem('user_id');
  }

  getLoggedUserId(): number | null {
    const userId = localStorage.getItem('user_id');
    return userId ? parseInt(userId, 10) : null;
  }

}
