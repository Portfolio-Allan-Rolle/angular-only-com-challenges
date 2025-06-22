import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesContributionPieChartComponent } from './sales-contribution-pie-chart.component';

describe('SalesContributionPieChartComponent', () => {
  let component: SalesContributionPieChartComponent;
  let fixture: ComponentFixture<SalesContributionPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesContributionPieChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesContributionPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
