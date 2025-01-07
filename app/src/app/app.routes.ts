import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from '../home/home.component';
import { ClothingListComponent } from './clothing-list/clothing-list.component';
import { ClothingDonationComponent } from './clothing-donation/clothing-donation.component';
import { ClothingDetailsComponent } from './clothing-details/clothing-details.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ClothingListComponent },
  { path: 'donate', component: ClothingDonationComponent },
  { path: 'clothing/:id', component: ClothingDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];
