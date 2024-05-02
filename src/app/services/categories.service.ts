import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from '../model/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  
  constructor(private http: HttpClient) { }

  backendHost : string ="http://localhost:8085/categories/";

  public getCategories():Observable<Array<category>>{
    return this.http.get<category[]>(this.backendHost)
  }
}
