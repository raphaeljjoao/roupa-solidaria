import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { ClothingItem } from '../../models/ClothingItem';
import { ClothingItemService } from '../../service/clothing-item.service';
import { NotificationService } from '../../service/notification-service.service';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';

@Component({
  selector: 'app-clothing-details',
  imports: [CommonModule, NavbarComponent, SharedPipesModule],
  templateUrl: './clothing-details.component.html',
  styleUrl: './clothing-details.component.scss'
})
export class ClothingDetailsComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clothingItemService: ClothingItemService,
    private notificationService: NotificationService
  ) {}

  clothingId!: number;
  clothingItem!: ClothingItem;

  ngOnInit() {
    this.clothingId = Number(this.route.snapshot.paramMap.get('id')) || 0;
    this.notificationService.showInfo(`Buscando detalhes da roupa ${this.clothingId}...`);
    this.clothingItemService.getClothingItemById(this.clothingId).subscribe((clothingItem: ClothingItem) => {
      this.clothingItem = clothingItem;
      this.notificationService.showSuccess(`Detalhes da roupa encontrados com sucesso!`);
    });
  }

  goBack() {
    this.router.navigate(['/list']);
  }

}
