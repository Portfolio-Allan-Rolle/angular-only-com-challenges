import { Component, inject } from '@angular/core';
import { CurrencyExchangeDataCardComponent } from '../currency-exchange-data-card/currency-exchange-data-card.component';
import { CurrencyExchangeRatesService } from '../../services/currency-exchange-rates.service';

@Component({
  selector: 'app-currency-exchange-data',
  imports: [CurrencyExchangeDataCardComponent],
  templateUrl: './currency-exchange-data.component.html',
  styleUrl: './currency-exchange-data.component.scss',
})
export class CurrencyExchangeDataComponent {
  public data = inject(CurrencyExchangeRatesService).data;
}
