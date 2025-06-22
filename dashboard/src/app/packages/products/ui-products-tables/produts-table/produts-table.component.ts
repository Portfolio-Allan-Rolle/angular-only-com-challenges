import { ChangeDetectorRef, Component } from '@angular/core';
import { Product } from '../../models/products';
import { ProductsService } from '../../services/products.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-produts-table',
  imports: [TableModule, CommonModule, BadgeModule],
  templateUrl: './produts-table.component.html',
  styleUrl: './produts-table.component.scss',
})
export class ProdutsTableComponent {
  products!: Product[];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
  }
}
