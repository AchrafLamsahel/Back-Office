import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { PageRequestCategoryDTO } from 'src/app/model/PageRequestDTO';
import { Category } from 'src/app/model/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  implements OnInit{
  categories: Category[] = [];
  pageRequestDTO!: Observable<PageRequestCategoryDTO>;
  errorMessage: any = '';
  currentPage = 0;
  pageSize = 2;
  totalPages = 0;
  totalElements = 0;

  
  constructor(private categoriesService: CategoriesService, private router: Router) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoriesService.getCategoriesPage(this.currentPage, this.pageSize).subscribe(items =>{
      this.categories = items.elements;
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
