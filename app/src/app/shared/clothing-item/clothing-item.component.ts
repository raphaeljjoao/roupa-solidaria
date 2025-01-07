import { Component, Input } from '@angular/core';
import { ClothingItem } from '../../../models/ClothingItem';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clothing-item',
  imports: [RouterModule],
  templateUrl: './clothing-item.component.html',
  styleUrls: ['./clothing-item.component.scss']
})
export class ClothingItemComponent {
  @Input() clothingItem!: ClothingItem;
}
