import { Component } from '@angular/core';
import { LocalStorageService } from '../../../service/local-storage.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../service/notification-service.service';

@Component({
  selector: 'app-menu-options',
  imports: [],
  templateUrl: './menu-options.component.html',
  styleUrl: './menu-options.component.scss'
})
export class MenuOptionsComponent {

  constructor(
    private localStorageService: LocalStorageService,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  logout() {
    this.localStorageService.logout();
    this.router.navigate(['/']);
    this.notificationService.showSuccess('Usuário deslogado com sucesso!');
  }

}
