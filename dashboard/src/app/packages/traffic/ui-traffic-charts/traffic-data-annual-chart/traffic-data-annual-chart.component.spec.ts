import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficDataAnnualChartComponent } from './traffic-data-annual-chart.component';

describe('TrafficDataAnnualChartComponent', () => {
  let component: TrafficDataAnnualChartComponent;
  let fixture: ComponentFixture<TrafficDataAnnualChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficDataAnnualChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficDataAnnualChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
