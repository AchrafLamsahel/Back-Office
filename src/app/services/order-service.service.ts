import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageRequestOrderDTO } from '../model/PageRequestOrderDTO';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) { }

  backendHost : string ="http://localhost:8085/order/";

  public getOrdersPage(page: number, size: number): Observable<PageRequestOrderDTO> {
    return this.http.get<PageRequestOrderDTO>(`${this.backendHost}${page}/${size}`);
  }
}
