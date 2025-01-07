import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { ClothingItem } from '../../models/ClothingItem';
import { ClothingItemService } from '../../service/clothing-item.service';
import { CommonModule } from '@angular/common';
import { ClothingItemComponent } from '../shared/clothing-item/clothing-item.component';
import { NotificationService } from '../../service/notification-service.service';
import { Router } from '@angular/router';
import { FilterOptionsComponent } from '../shared/filter-options/filter-options.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { GenderChoices, SeasonChoices, SizeChoices } from '../../enum/Clothing';

@Component({
  selector: 'app-clothing-list',
  imports: [CommonModule, NavbarComponent, ClothingItemComponent, FilterOptionsComponent],
  templateUrl: './clothing-list.component.html',
  styleUrl: './clothing-list.component.scss',
  animations: [
    trigger('filterAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('0.3s ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('0.3s ease', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]

})
export class ClothingListComponent {

  constructor(
    private clothingItemService: ClothingItemService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  clothingItems: ClothingItem[] = [];
  filteredClothingItems: ClothingItem[] = [];
  showFilter: boolean = false;

  noItemsMessage = 'Não há itens disponíveis';

  ngOnInit(): void {
    this.notificationService.showInfo('Carregando roupas...');
    this.clothingItemService.getClothingItems().subscribe((items) => {
      this.clothingItems = items;
      this.filteredClothingItems = items;
      this.updateFilterMessage();
    });
  }

  goToDonate() {
    this.router.navigate(['donate']);
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  onFiltersApplied(event: any){
    const filters = event as {gender: GenderChoices[], size: SizeChoices[], season: SeasonChoices[]};

    this.filteredClothingItems = this.clothingItems;

    if (filters.gender.length != 0) {
      this.filteredClothingItems = this.filteredClothingItems.filter(item => filters.gender.includes(item.gender));
    }

    if (filters.size.length != 0) {
      this.filteredClothingItems = this.filteredClothingItems.filter(item => filters.size.includes(item.size));
    }

    if (filters.season.length != 0) {
      this.filteredClothingItems = this.filteredClothingItems.filter(item => filters.season.includes(item.season));
    }

    this.updateFilterMessage();
  }

  updateFilterMessage() {
    if (this.clothingItems.length === 0) {
      this.noItemsMessage = 'Não há itens disponíveis';
    } else if (this.filteredClothingItems.length === 0) {
      this.noItemsMessage = 'Não há itens disponíveis para os filtros selecionados';
    } else {
      this.noItemsMessage = '';
    }
  }

}
