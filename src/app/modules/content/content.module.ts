import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { Content_Pages } from './pages';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { ReplaceSvgDirective } from '../shared/directives/replace-svg';
import { StayTunedComponent } from './pages/stay-tuned/stay-tuned.component';
import { Content_Component } from './components';

@NgModule({
  declarations: [
    ...Content_Pages,
    ...Content_Component,
    StayTunedComponent,
  ],
  imports: [CommonModule, ContentRoutingModule, TranslateModule, SharedModule],
})
export class ContentModule {}
