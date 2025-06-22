import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { ProductsListComponent } from './packages/products/products-list/products-list.component';
import { SalesDataComponent } from './packages/sales/sales-data/sales-data.component';
import { TrafficDataComponent } from './packages/traffic/traffic-data/traffic-data.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    ProductsListComponent,
    SalesDataComponent,
    TrafficDataComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dashboard-statistics';
}
