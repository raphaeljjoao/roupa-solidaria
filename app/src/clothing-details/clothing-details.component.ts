import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../app/shared/navbar/navbar.component';
import { ClothingItem } from '../models/ClothingItem';
import { ClothingItemService } from '../service/clothing-item.service';
import { GenderChoices, SeasonChoices, SizeChoices } from '../enum/Clothing';
import { NotificationService } from '../service/notification-service.service';

@Component({
  selector: 'app-clothing-details',
  imports: [CommonModule, NavbarComponent],
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

  public translateSize(size: SizeChoices): string {
    const sizeTranslations: Record<SizeChoices, string> = {
      [SizeChoices.Small]: 'Pequeno',
      [SizeChoices.Medium]: 'Médio',
      [SizeChoices.Large]: 'Grande',
      [SizeChoices.ExtraLarge]: 'Extra Grande',
    };
    return sizeTranslations[size] || 'Tamanho não especificado';
  }

  public translateGender(gender: GenderChoices): string {
    const genderTranslations: Record<GenderChoices, string> = {
      [GenderChoices.Male]: 'Masculino',
      [GenderChoices.Female]: 'Feminino',
      [GenderChoices.Unisex]: 'Unissex',
    };
    return genderTranslations[gender] || 'Gênero não especificado';
  }

  public translateSeason(season: SeasonChoices): string {
    const seasonTranslations: Record<SeasonChoices, string> = {
      [SeasonChoices.Spring]: 'Primavera',
      [SeasonChoices.Summer]: 'Verão',
      [SeasonChoices.Fall]: 'Outono',
      [SeasonChoices.Winter]: 'Inverno',
    };
    return seasonTranslations[season] || 'Estação não especificada';
  }

  goBack() {
    this.router.navigate(['/list']);
  }

}
