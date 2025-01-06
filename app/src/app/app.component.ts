import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RoupaSolidária';

  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    const loggedUser = this.localStorage.getLoggedUserId();
    if (loggedUser == null) {
      this.router.navigate(['/login']);
    }
  }

}
