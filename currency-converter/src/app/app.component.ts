import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { CurrencyInputFormComponent } from './features/currency/components/currency-input-form/currency-input-form.component';
import { CurrencyExchangeDataComponent } from './features/currency/components/currency-exchange-data/currency-exchange-data.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    CurrencyInputFormComponent,
    CurrencyExchangeDataComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'currency-converter';
}
