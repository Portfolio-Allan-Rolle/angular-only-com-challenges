import { Component } from '@angular/core';
import { TrafficDataAnnualChartComponent } from '../ui-traffic-charts/traffic-data-annual-chart/traffic-data-annual-chart.component';
import { TrafficDataLineChartComponent } from '../ui-traffic-charts/traffic-data-line-chart/traffic-data-line-chart.component';

@Component({
  selector: 'app-traffic-data',
  imports: [TrafficDataAnnualChartComponent, TrafficDataLineChartComponent],
  templateUrl: './traffic-data.component.html',
  styleUrl: './traffic-data.component.scss',
})
export class TrafficDataComponent {}
