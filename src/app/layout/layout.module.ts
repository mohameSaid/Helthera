import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout_Components } from '.';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../modules/shared/shared.module';

@NgModule({
  declarations: [...Layout_Components],
  exports: [...Layout_Components],
  imports: [CommonModule, TranslateModule, RouterModule, SharedModule],
})
export class LayoutModule {}
