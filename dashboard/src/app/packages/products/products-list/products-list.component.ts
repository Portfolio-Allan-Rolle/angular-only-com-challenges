import { Component } from '@angular/core';
import { ProdutsTableComponent } from '../ui-products-tables/produts-table/produts-table.component';
import { ProductsInventoryComponent } from '../ui-products-tables/products-inventory/products-inventory.component';

@Component({
  selector: 'app-products-list',
  imports: [ProdutsTableComponent, ProductsInventoryComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {}
