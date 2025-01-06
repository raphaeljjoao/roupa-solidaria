import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuOptionsComponent } from '../menu-options/menu-options.component';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, MenuOptionsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  showMenu: boolean = false;

  toggleMenu() {
    console.log('toggleMenu', this.showMenu);
    this.showMenu = !this.showMenu;
  }

}
