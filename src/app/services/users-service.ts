import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user';
import { Observable } from 'rxjs';
import { PageRequestProductDTO } from '../model/PageRequestProductDTO';
import { PageRequestUsersDTO } from '../model/PageRequestUsersDTO';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }

  backendHost : string ="http://localhost:8085/users/";

  public getUsers():Observable<Array<user>>{
    return this.http.get<user[]>(this.backendHost)
  }


  public getUsersPage(page: number, size: number): Observable<PageRequestUsersDTO> {
    return this.http.get<PageRequestUsersDTO>(`${this.backendHost}${page}/${size}`);
  }


}
