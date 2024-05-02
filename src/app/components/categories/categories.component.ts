import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { category } from 'src/app/model/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  implements OnInit{
  categories!: category[];
  errorMessage: any;

  constructor(private categoriesService: CategoriesService, private router: Router) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe({
      next: (posts) => {
        this.categories = posts;
        console.log(this.categories);
      },
      error: (error) => {
        this.errorMessage = error;
      }
    });
  }
  
}
