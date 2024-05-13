import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { HttpClient } from '@angular/common/http';
import { PageRequestCategoryDTO } from '../model/PageRequestDTO';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  
  constructor(private http: HttpClient) { }

  backendHost : string ="http://localhost:8085/categories/";

  public getCategoriesPage(page: number, size: number): Observable<PageRequestCategoryDTO> {
    return this.http.get<PageRequestCategoryDTO>(`${this.backendHost}page/${page}/${size}`);
  }
  
  public updateProduct(id : number,categories:Category):Observable<Object>{
  return this.http.put(this.backendHost+"updateCategory/"+id,categories)
  }

  public getProductById(id:any){
    return this.http.get<Category>(this.backendHost+"/client/product/"+ id)
  }

  public deleteCategoryById(id : any){
    return this.http.delete(this.backendHost+"deleteCategory/"+id)
  }

  public addCategory(category: any) {
    return this.http.post<Category>(this.backendHost+"addCategory", category);
  }



}
