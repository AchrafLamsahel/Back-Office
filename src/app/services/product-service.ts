import { Injectable } from '@angular/core';
import { product } from '../model/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private http: HttpClient) { }

  backendHost : string ="http://localhost:8085/products/";

  public getProducts():Observable<Array<product>>{
    return this.http.get<product[]>(this.backendHost)
  }

}
