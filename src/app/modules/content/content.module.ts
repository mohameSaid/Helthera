import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { Content_Pages } from './pages';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { ReplaceSvgDirective } from './directives/replace-svg';
import { StayTunedComponent } from './pages/stay-tuned/stay-tuned.component';
 
@NgModule({
  declarations: [...Content_Pages, ReplaceSvgDirective, StayTunedComponent],
  imports: [CommonModule, ContentRoutingModule, TranslateModule, SharedModule],
})
export class ContentModule {}
