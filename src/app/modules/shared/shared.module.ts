import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Shared_Components } from './components';
import { Shared_Directives } from './directives';

@NgModule({
  declarations: [...Shared_Components, ...Shared_Directives],
  exports: [...Shared_Components, ...Shared_Directives],
  imports: [CommonModule, TranslateModule],
})
export class SharedModule {}
