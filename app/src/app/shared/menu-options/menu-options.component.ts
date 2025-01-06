import { Component } from '@angular/core';
import { LocalStorageService } from '../../../service/local-storage.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../service/notification-service.service';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-menu-options',
  imports: [],
  templateUrl: './menu-options.component.html',
  styleUrl: './menu-options.component.scss'
})
export class MenuOptionsComponent {

  constructor(
    private loginService: LoginService,
    private notificationService: NotificationService,
  ) { }

  logout() {
    this.loginService.logout();
    this.notificationService.showSuccess('Usuário deslogado com sucesso!');
  }

}
