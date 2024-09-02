import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    // Set default language
    this.translate.setDefaultLang('en');
    // Optionally, set language based on user preference or browser settings
    this.translate.use('en'); // You can change this to 'es' or any other supported language
  }
  title = 'Helthera';
}
