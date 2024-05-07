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

  public getCategories():Observable<Array<Category>>{
    return this.http.get<Category[]>(this.backendHost)
  }

  public getCategoriesPage(page: number, size: number): Observable<PageRequestCategoryDTO> {
    return this.http.get<PageRequestCategoryDTO>(`${this.backendHost}page/${page}/${size}`);
  }

}
