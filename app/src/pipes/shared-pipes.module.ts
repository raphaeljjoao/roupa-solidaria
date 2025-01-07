// shared-pipes.module.ts
import { NgModule } from '@angular/core';
import { TranslateSizePipe } from './translate-size';
import { TranslateGenderPipe } from './translate-gender';
import { TranslateSeasonPipe } from './translate-season';

@NgModule({
  imports: [TranslateSizePipe, TranslateGenderPipe, TranslateSeasonPipe],
  exports: [TranslateSizePipe, TranslateGenderPipe, TranslateSeasonPipe]
})
export class SharedPipesModule {}
