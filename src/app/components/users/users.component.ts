import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/model/user';
import { UsersServiceService } from 'src/app/services/users-service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users!: user[];
  errorMessage: any;
  currentPage = 0;
  pageSize = 4;
  totalPages = 0;
  totalElements = 0;

  
  constructor(private usersService: UsersServiceService, private router: Router) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.usersService.getUsersPage(this.currentPage, this.pageSize).subscribe(items =>{
      this.users = items.elements;
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


}
