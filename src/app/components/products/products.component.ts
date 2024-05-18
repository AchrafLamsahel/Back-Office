import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { product } from 'src/app/model/product';
import { CategoriesService } from 'src/app/services/categories.service';
import { CloudinaryService } from 'src/app/services/cloudinary.service';
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
  files: File[] = [];
  productForm: FormGroup;

  
  constructor(private fb: FormBuilder,private categoriesService: CategoriesService, private router: Router,
    private cloudinaryService: CloudinaryService,private productService:ProductServiceService) {
    this.productForm = this.fb.group({
      productId: ['', Validators.required],
      label: ['', Validators.required],
      productTitle: ['', Validators.required],
      price: ['', Validators.required],
      idCategory: ['', Validators.required],
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
          const newProduct: product = {
            productId: this.productForm.value.productId,
            label: this.productForm.value.label,
            productTitle: this.productForm.value.productTitle,
            price: this.productForm.value.price,
            slug: '', 
            idCategory: this.productForm.value.idCategory,
            valid: this.productForm.value.valid,
            imageUrl: res.secure_url, 
            description: this.productForm.value.description
          };
          this.productService.addProduct(newProduct).subscribe(
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

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.productService.getProductsPage(this.currentPage, this.pageSize).subscribe(items =>{
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

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
