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
  currentPage = 0;
  pageSize = 5;
  totalPages = 0;
  totalElements = 0;

  
  constructor(private productsService: ProductServiceService, private router: Router) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.productsService.getProductsPage(this.currentPage, this.pageSize).subscribe(items =>{
      this.products = items.elements;
      this.totalElements = items.totalElements;
      this.totalPages = items.totalPages;
      console.log(items)
    })
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.loadCategories();
  }

  generateArray(length: number): any[] {
    return Array.from({ length }, (_, i) => i);
  }

  goToPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage--; 
      this.loadCategories();
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++; 
      this.loadCategories();
    }
  }

  isPopupVisible = false;

  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }

  closePopup(): void {
    this.isPopupVisible = false;
  }

}
