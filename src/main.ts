import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


  /**
   * DATABINDING:
   * 
   * String Interpolation: {{ data }}
   * 
   * Property Binding: [property]="data"
   * 
   * Event binding: (event)="expression"
   * 
   * Two-way-binding [(ngModel)]="data"
   */