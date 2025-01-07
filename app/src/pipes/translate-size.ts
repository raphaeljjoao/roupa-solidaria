import { Pipe, PipeTransform } from '@angular/core';
import { SizeChoices } from '../enum/Clothing';

@Pipe({
  name: 'translateSize'
})
export class TranslateSizePipe implements PipeTransform {
  transform(size: SizeChoices): string {
    const sizeTranslations: Record<SizeChoices, string> = {
      [SizeChoices.Small]: 'P',
      [SizeChoices.Medium]: 'M',
      [SizeChoices.Large]: 'G',
      [SizeChoices.ExtraLarge]: 'GG',
    };
    return sizeTranslations[size] || 'Tamanho não especificado';
  }
}
