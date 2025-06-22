import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAnnualChartComponent } from './sales-annual-chart.component';

describe('SalesAnnualChartComponent', () => {
  let component: SalesAnnualChartComponent;
  let fixture: ComponentFixture<SalesAnnualChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesAnnualChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesAnnualChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
