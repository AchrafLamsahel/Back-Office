import { Injectable } from '@angular/core';
import { product } from '../model/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageRequestProductDTO } from '../model/PageRequestProductDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private http: HttpClient) { }

  backendHost : string ="http://localhost:8085/products/";

  public getProducts():Observable<Array<product>>{
    return this.http.get<product[]>(this.backendHost)
  }

  public getProductsPage(page: number, size: number): Observable<PageRequestProductDTO> {
    return this.http.get<PageRequestProductDTO>(`${this.backendHost}page/${page}/${size}`);
  }

}
