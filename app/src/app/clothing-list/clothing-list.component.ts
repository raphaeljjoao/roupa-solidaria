import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { ClothingItem } from '../../models/ClothingItem';
import { ClothingItemService } from '../../service/clothing-item.service';
import { CommonModule } from '@angular/common';
import { ClothingItemComponent } from '../shared/clothing-item/clothing-item.component';

@Component({
  selector: 'app-clothing-list',
  imports: [CommonModule, NavbarComponent, ClothingItemComponent],
  templateUrl: './clothing-list.component.html',
  styleUrl: './clothing-list.component.scss'
})
export class ClothingListComponent {

  constructor(
    private clothingItemService: ClothingItemService
  ) {}

  clothingItems: ClothingItem[] = [];

  ngOnInit(): void {
    this.clothingItemService.getClothingItems().subscribe((items) => {
      this.clothingItems = items.concat(items, items, items, items);
    });
  }

}
