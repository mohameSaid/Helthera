import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScrollService } from './modules/shared/services/scroll-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Helthera';

  constructor(
    private translate: TranslateService,
    private scrollService: ScrollService
  ) {
    // Set default language
    this.translate.setDefaultLang('en');
    // Optionally, set language based on user preference or browser settings
    this.translate.use('en'); // You can change this to 'es' or any other supported language
  }
  ngOnInit() {
    this.scrollService.scrollToTopOnNavigation();  
  }
}
