import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-clothing-donation',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './clothing-donation.component.html',
  styleUrl: './clothing-donation.component.scss'
})
export class ClothingDonationComponent {

  onFileChange(event: Event) {

  }

  submitForm() {

  }

}
