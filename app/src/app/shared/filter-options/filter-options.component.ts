import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { getEnumValues } from '../../../enum/enum-helper';
import { GenderChoices, SeasonChoices, SizeChoices } from '../../../enum/Clothing';
import { FormsModule } from '@angular/forms';
import { SharedPipesModule } from '../../../pipes/shared-pipes.module';

@Component({
  selector: 'app-filter-options',
  imports: [CommonModule, FormsModule, SharedPipesModule],
  templateUrl: './filter-options.component.html',
  styleUrl: './filter-options.component.scss'
})
export class FilterOptionsComponent {

  selectedGender: GenderChoices[] = [];
  selectedSize: SizeChoices[] = [];
  selectedSeason: SeasonChoices[] = [];

  @Output() filtersApplied = new EventEmitter<any>();

  genderOptions = getEnumValues(GenderChoices);
  sizeOptions = getEnumValues(SizeChoices);
  seasonOptions = getEnumValues(SeasonChoices);

  onGenderChange(gender: GenderChoices, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.selectedGender.push(gender);
    } else {
      this.selectedGender = this.selectedGender.filter(g => g !== gender);
    }
    this.applyFilters();
  }

  onSizeChange(size: SizeChoices, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.selectedSize.push(size);
    } else {
      this.selectedSize = this.selectedSize.filter(s => s !== size);
    }
    this.applyFilters();
  }

  onSeasonChange(season: SeasonChoices, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.selectedSeason.push(season);
    } else {
      this.selectedSeason = this.selectedSeason.filter(s => s !== season);
    }
    this.applyFilters();
  }

  applyFilters() {
    this.filtersApplied.emit({
      gender: this.selectedGender,
      size: this.selectedSize,
      season: this.selectedSeason,
    });
  }

}
