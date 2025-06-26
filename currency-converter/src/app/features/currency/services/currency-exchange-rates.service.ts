import { Injectable, signal } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

export interface IExchangeRate {
  code: string;
  rate: number;
  symbol: string;
  country: string;
  icon: string;
  amount?: number;
}

@Injectable({
  providedIn: 'root',
})
export class CurrencyExchangeRatesService {
  data = signal<IExchangeRate[]>([]);

  dataExchangeRate: IExchangeRate[] = [
    {
      code: 'NZD',
      rate: 1.932,
      symbol: 'NZD',
      country: 'New Zealand',
      icon: 'https://wise.com/web-art/assets/flags/nzd.svg',
    },
    {
      code: 'JPY',
      rate: 168.9,
      symbol: 'JPY',
      country: 'Japan',
      icon: 'https://wise.com/web-art/assets/flags/jpy.svg',
    },
    {
      code: 'AED',
      rate: 4.261885,
      symbol: 'د.إ',
      country: 'United Arab Emirates',
      icon: 'https://wise.com/web-art/assets/flags/aed.svg',
    },
    {
      code: 'BRL',
      rate: 6.41821,
      symbol: 'R$',
      country: 'Brazilian Real',
      icon: 'https://wise.com/web-art/assets/flags/brl.svg',
    },
    {
      code: 'ALL',
      rate: 97.971103,
      symbol: 'Lek',
      country: 'Albanian Lek',
      icon: 'https://wise.com/public-resources/assets/flags/rectangle/all.png',
    },
    {
      code: 'AMD',
      rate: 446.522122,
      symbol: '֏',
      country: 'Armenian Dram',
      icon: 'https://wise.com/public-resources/assets/flags/rectangle/amd.png',
    },
    {
      code: 'ANG',
      rate: 2.076826,
      symbol: 'ƒ',
      country: 'Netherlands Antillean',
      icon: 'https://wise.com/public-resources/assets/flags/rectangle/ang.png',
    },
    {
      code: 'AOA',
      rate: 1063.002214,
      symbol: 'Kz',
      country: 'Angolan Kwanza',
      icon: 'https://wise.com/public-resources/assets/flags/rectangle/aoa.png',
    },
    {
      code: 'ARS',
      rate: 1362.389147,
      country: 'Argentine Peso',
      symbol: '$',
      icon: 'https://wise.com/web-art/assets/flags/ars.svg',
    },
    {
      code: 'AUD',
      rate: 1.786372,
      symbol: 'A$',
      country: 'Australian Dollar',
      icon: 'https://wise.com/web-art/assets/flags/aud.svg',
    },
    {
      code: 'AWG',
      rate: 2.09177,
      symbol: 'ƒ',
      country: 'Aruban Florin',
      icon: 'https://wise.com/public-resources/assets/flags/rectangle/awg.png',
    },
    {
      code: 'AZN',
      rate: 1.959734,
      symbol: 'man.',
      country: 'Azerbaijani Manat',
      icon: 'https://wise.com/public-resources/assets/flags/rectangle/azn.png',
    },
  ];

  getFormControl(form: FormGroup, control: string): AbstractControl {
    return form.get(control) as AbstractControl;
  }

  isInvalidAndTouchedOrDirty(control: AbstractControl) {
    return control.invalid && (control.touched || control.dirty);
  }

  getRate(amount: string) {
    const formattedResponse = [...this.dataExchangeRate].map((el) => ({
      ...el,
      amount: +(+amount * el.rate).toFixed(2),
    }));
    this.data.set(formattedResponse);
  }
}
