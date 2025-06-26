import { Component, inject, OnInit } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CurrencyExchangeRatesService } from '../../services/currency-exchange-rates.service';
import { delay, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-currency-input-form',
  imports: [ReactiveFormsModule],
  templateUrl: './currency-input-form.component.html',
  styleUrl: './currency-input-form.component.scss',
})
export class CurrencyInputFormComponent implements OnInit {
  private fb = inject(NonNullableFormBuilder);
  public formService = inject(CurrencyExchangeRatesService);

  form = this.fb.group({
    amount: [
      '',
      [Validators.required, Validators.pattern(/^\d+(?:(\.|,)\d{0,2})*$/)],
    ],
  });

  ngOnInit(): void {
    this.form.controls.amount.valueChanges.subscribe((value) => {
      if (this.form.controls.amount.valid) {
        this.formService.getRate(value);
      }
    });
  }
}
