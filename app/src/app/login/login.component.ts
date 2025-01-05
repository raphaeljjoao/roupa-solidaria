import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
  ) {}

  public getBaseUser() {
    this.loginService.getUser(7).subscribe((user) => {
      console.log(user);
    });
  }

}
