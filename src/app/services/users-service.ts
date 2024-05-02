import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }

  backendHost : string ="http://localhost:8085/users/";

  public getUsers():Observable<Array<user>>{
    return this.http.get<user[]>(this.backendHost)
  }
}
