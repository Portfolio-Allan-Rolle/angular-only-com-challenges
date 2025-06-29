import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyInputFormComponent } from './currency-input-form.component';

describe('CurrencyInputFormComponent', () => {
  let component: CurrencyInputFormComponent;
  let fixture: ComponentFixture<CurrencyInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyInputFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
