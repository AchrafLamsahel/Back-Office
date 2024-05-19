import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Address } from 'src/app/model/Address';
import { Order } from 'src/app/model/Order';
import { PageRequestOrderDTO } from 'src/app/model/PageRequestOrderDTO';
import { OrderServiceService } from 'src/app/services/order-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  order: Order[] = [];
  address: Address[] = [];
  pageRequestDTO!: Observable<PageRequestOrderDTO>;
  currentPage = 0;
  pageSize = 5;
  totalPages = 0;
  totalElements = 0;

  constructor( private router: Router,private orderService : OrderServiceService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.orderService.getOrdersPage(this.currentPage, this.pageSize).subscribe(items =>{
      this.order = items.elements;
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

  isDelivryAdressVisible = false;

  togglePopupDelivryAdress(): void {
    this.isDelivryAdressVisible = !this.isDelivryAdressVisible;
  }

  closePopupDeliveryAdress(): void {
    this.isDelivryAdressVisible = false;
  }

  isOrderItemsVisible = false;

  togglePopupOrderItems(): void {
    this.isOrderItemsVisible = !this.isOrderItemsVisible;
  }

  closePopupOrderItems(): void {
    this.isOrderItemsVisible = false;
  }

}