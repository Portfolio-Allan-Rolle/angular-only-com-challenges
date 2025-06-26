import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyExchangeDataComponent } from './currency-exchange-data.component';

describe('CurrencyExchangeDataComponent', () => {
  let component: CurrencyExchangeDataComponent;
  let fixture: ComponentFixture<CurrencyExchangeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyExchangeDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyExchangeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
