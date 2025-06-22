import { Component } from '@angular/core';
import { SalesAnnualChartComponent } from '../ui-sales-charts/sales-annual-chart/sales-annual-chart.component';
import { SalesContributionPieChartComponent } from '../ui-sales-charts/sales-contribution-pie-chart/sales-contribution-pie-chart.component';

@Component({
  selector: 'app-sales-data',
  imports: [SalesAnnualChartComponent, SalesContributionPieChartComponent],
  templateUrl: './sales-data.component.html',
  styleUrl: './sales-data.component.scss',
})
export class SalesDataComponent {}
