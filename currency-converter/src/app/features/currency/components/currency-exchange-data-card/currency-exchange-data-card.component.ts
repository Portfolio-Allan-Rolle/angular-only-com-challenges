import { Component, input } from '@angular/core';
import { IExchangeRate } from '../../services/currency-exchange-rates.service';

@Component({
  selector: 'app-currency-exchange-data-card',
  imports: [],
  templateUrl: './currency-exchange-data-card.component.html',
  styleUrl: './currency-exchange-data-card.component.scss',
})
export class CurrencyExchangeDataCardComponent {
  item = input.required<IExchangeRate>();
}
