import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user';
import { Observable } from 'rxjs';
import { PageRequestUsersDTO } from '../model/PageRequestUsersDTO';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }

  backendHost : string ="http://localhost:8085/users/";

  public getUsersPage(page: number, size: number): Observable<PageRequestUsersDTO> {
    return this.http.get<PageRequestUsersDTO>(`${this.backendHost}${page}/${size}`);
  }

  public updateUser(id : number,user:user):Observable<Object>{
    return this.http.put(this.backendHost+"admin/"+id,user)
  }
  
  public getUserById(id:any){
      return this.http.get<user>(this.backendHost + id)
  }
  
    public deleteUserById(id : any){
      return this.http.delete(this.backendHost+"/admin/"+id)
    }

    public addRoleToUserByEmail(productObject: any) {
      return this.http.post<user>(this.backendHost+"admin/add-role", productObject);
    }

}
