import { Pipe, PipeTransform } from '@angular/core';
import { SizeChoices } from '../enum/Clothing';

@Pipe({
  name: 'translateSize'
})
export class TranslateSizePipe implements PipeTransform {
  transform(size: SizeChoices): string {
    const sizeTranslations: Record<SizeChoices, string> = {
      [SizeChoices.Small]: 'Pequeno',
      [SizeChoices.Medium]: 'Médio',
      [SizeChoices.Large]: 'Grande',
      [SizeChoices.ExtraLarge]: 'Extra Grande',
    };
    return sizeTranslations[size] || 'Tamanho não especificado';
  }
}
