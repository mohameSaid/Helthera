import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout_Components } from '.';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [...Layout_Components],
  exports: [...Layout_Components],
  imports: [CommonModule, TranslateModule],
})
export class LayoutModule {}
