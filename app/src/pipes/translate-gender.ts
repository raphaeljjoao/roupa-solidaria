import { Pipe, PipeTransform } from '@angular/core';
import { GenderChoices } from '../enum/Clothing';

@Pipe({
  name: 'translateGender'
})
export class TranslateGenderPipe implements PipeTransform {
  transform(gender: GenderChoices): string {
    const genderTranslations: Record<GenderChoices, string> = {
      [GenderChoices.Male]: 'Masculino',
      [GenderChoices.Female]: 'Feminino',
      [GenderChoices.Unisex]: 'Unissex',
    };
    return genderTranslations[gender] || 'Gênero não especificado';
  }
}
