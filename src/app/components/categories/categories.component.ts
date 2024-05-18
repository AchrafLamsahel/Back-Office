import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  Observable} from 'rxjs';
import { PageRequestCategoryDTO } from 'src/app/model/PageRequestDTO';
import { Category } from 'src/app/model/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { CloudinaryService } from 'src/app/services/cloudinary.service';

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
  pageSize = 5;
  totalPages = 0;
  totalElements = 0;
  urlImage: string = '';
  categoryForm: FormGroup;
  files: File[] = [];

  constructor(private fb: FormBuilder,private categoriesService: CategoriesService, private router: Router,
    private cloudinaryService: CloudinaryService,private http:HttpClient) {
    this.categoryForm = this.fb.group({
      categoryId: ['', Validators.required],
      idParent: ['', Validators.required],
      label: ['', Validators.required],
      categoryTitle: ['', Validators.required],
      imageUrl: ['', Validators.required],
      valid: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  uploadfileImage() {
    if (!this.files[0]) {
      alert("No file selected");
      return;
    }

    const data = new FormData();
    data.append('file', this.files[0]);
    data.append('upload_preset', 'Images-Cloud');
    data.append('cloud_name', 'dgsucldvy');

    this.cloudinaryService.uploadImageTest(data).subscribe(
      (res) => {
        if (res) {
          console.log(res);
          const newCategory: Category = {
            categoryId: this.categoryForm.value.categoryId,
            idParent: this.categoryForm.value.idParent,
            label: this.categoryForm.value.label,
            slug: '', 
            description: this.categoryForm.value.description,
            categoryTitle: this.categoryForm.value.categoryTitle,
            imageUrl: res.secure_url, 
            valid: this.categoryForm.value.valid
          };

          this.categoriesService.addCategory(newCategory).subscribe(
            data => {
              console.log("Product added successfully:", data);
              window.location.reload();
            },
            error => {
              console.error("Error adding product:", error);
            }
          );
        } else {
          console.error("No response from Cloudinary");
        }
      },
      (error) => {
        console.error("Error uploading image:", error);
      }
    );
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.categoryForm.patchValue({
        imageCategory: file
      });
    }
  }

onSelect(event: any) {
  console.log(event);
  this.files.push(...event.addedFiles);
}

onRemove(event: any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

  saveCategory(formData: any) {
    this.categoriesService.addCategory(formData).subscribe(
      response => {
        console.log('Category saved successfully', response);
      },
      error => {
        console.error('Error saving category', error);
    }
    );
  }
  
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
