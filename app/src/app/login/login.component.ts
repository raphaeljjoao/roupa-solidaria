import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { User } from '../../models/User';
import { LocalStorageService } from '../../service/local-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    private localStorageService: LocalStorageService,
    private snackBar: MatSnackBar
  ) {}

  public getBaseUser() {
    this.loginService.getUser(8).subscribe((u) => {
      const user: User = u;
      this.localStorageService.login(user);
      this.snackBar.open(`Logado com sucesso como o usuário ${user.username}`, '', {
        panelClass: ['custom-snackbar', 'custom-snackbar-success']
      });
    });
  }

}
