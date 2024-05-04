import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH_API, httpOptions } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) { } 


  login(email : string,password: string): Observable<any> {
     return this.http.post(AUTH_API,{email,password,},httpOptions); 
    }
}
