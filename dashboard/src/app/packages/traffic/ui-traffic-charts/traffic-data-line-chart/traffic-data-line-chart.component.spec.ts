import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficDataLineChartComponent } from './traffic-data-line-chart.component';

describe('TrafficDataLineChartComponent', () => {
  let component: TrafficDataLineChartComponent;
  let fixture: ComponentFixture<TrafficDataLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficDataLineChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficDataLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
