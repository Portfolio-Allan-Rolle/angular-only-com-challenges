import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products';
import { ProductsService } from '../../services/products.service';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-inventory',
  imports: [
    TableModule,
    TagModule,
    RatingModule,
    CommonModule,
    ButtonModule,
    FormsModule,
  ],
  templateUrl: './products-inventory.component.html',
  styleUrl: './products-inventory.component.scss',
})
export class ProductsInventoryComponent implements OnInit {
  products!: Product[];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'success';
    }
  }
}
