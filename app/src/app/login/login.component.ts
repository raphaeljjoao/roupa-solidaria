import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { User } from '../../models/User';
import { LocalStorageService } from '../../service/local-storage.service';
import { NotificationService } from '../../service/notification-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    private localStorageService: LocalStorageService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  public getBaseUser() {
    this.notificationService.showInfo('Buscando usuário base...');
    this.loginService.getUser(8).subscribe((u) => {
      const user: User = u;
      this.localStorageService.login(user);
      this.notificationService.showSuccess(`Logado com sucesso como o usuário ${user.username}`);

      setTimeout(() => {
        this.router.navigate(['/list']);
      }, 500);
    });
  }

}
