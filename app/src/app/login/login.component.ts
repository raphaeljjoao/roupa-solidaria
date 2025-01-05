import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { User } from '../../models/User';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    private localStorageService: LocalStorageService
  ) {}

  public getBaseUser() {
    this.loginService.getUser(8).subscribe((u) => {
      const user: User = u;
      this.localStorageService.login(user);
    });
  }

}
