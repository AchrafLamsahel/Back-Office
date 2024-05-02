import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/model/product';
import { ProductServiceService } from 'src/app/services/product-service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit{
  
  products!: product[];
  errorMessage: any;

  constructor(private productsService: ProductServiceService, private router: Router) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: (posts) => {
        this.products = posts;
        console.log(this.products);
      },
      error: (error) => {
        this.errorMessage = error;
      }
    });
  }

}
