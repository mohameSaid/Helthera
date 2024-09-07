import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Shared_Components } from './components';
import { Shared_Directives } from './directives';
import { CarouselModule } from 'ngx-owl-carousel-o';
const _SharedModule = [CarouselModule];
@NgModule({
  declarations: [...Shared_Components, ...Shared_Directives],
  imports: [..._SharedModule, CommonModule, TranslateModule],
  exports: [...Shared_Components, ...Shared_Directives, ..._SharedModule],
})
export class SharedModule {}
