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

  public getProductsPage(page: number, size: number): Observable<PageRequestProductDTO> {
    return this.http.get<PageRequestProductDTO>(`${this.backendHost}page/${page}/${size}`);
  }

  public updateProduct(id : number,product:product):Observable<Object>{
    return this.http.put(this.backendHost+"/admin/update/"+id,product)
  }
  
  public getProductById(id:any){
    return this.http.get<product>(this.backendHost+"/client/product/"+ id)
  }

  public deleteProductById(id : any){
    return this.http.delete(this.backendHost+"/admin/delete/"+id)
  }

  public addProduct(product: any) {
    return this.http.post<product>(this.backendHost+"addProduct", product);
  }

}
