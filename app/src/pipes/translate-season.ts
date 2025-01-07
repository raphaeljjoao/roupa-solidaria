import { Pipe, PipeTransform } from '@angular/core';
import { SeasonChoices } from '../enum/Clothing';

@Pipe({
  name: 'translateSeason'
})
export class TranslateSeasonPipe implements PipeTransform {
  transform(season: SeasonChoices): string {
    const seasonTranslations: Record<SeasonChoices, string> = {
      [SeasonChoices.Spring]: 'Primavera',
      [SeasonChoices.Summer]: 'Verão',
      [SeasonChoices.Fall]: 'Outono',
      [SeasonChoices.Winter]: 'Inverno',
    };
    return seasonTranslations[season] || 'Estação não especificada';
  }
}
