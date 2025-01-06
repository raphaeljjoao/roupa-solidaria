import { Component, Input } from '@angular/core';
import { ClothingItem } from '../../../models/ClothingItem';

@Component({
  selector: 'app-clothing-item',
  templateUrl: './clothing-item.component.html',
  styleUrls: ['./clothing-item.component.scss'] // Corrigido para styleUrls
})
export class ClothingItemComponent {
  @Input() clothingItem!: ClothingItem;
}
