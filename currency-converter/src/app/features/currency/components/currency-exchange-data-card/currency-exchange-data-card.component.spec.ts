import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyExchangeDataCardComponent } from './currency-exchange-data-card.component';

describe('CurrencyExchangeDataCardComponent', () => {
  let component: CurrencyExchangeDataCardComponent;
  let fixture: ComponentFixture<CurrencyExchangeDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyExchangeDataCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyExchangeDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
