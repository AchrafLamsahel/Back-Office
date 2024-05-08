import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private router: Router, private authService: AuthorizationService, private tokenService:TokenStorageService) {
  }

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.tokenService.getToken() != null) { 
        console.log("TEST");
        console.log(this.tokenService.getToken());
          let roles = next.data['roles'] as Array<string>
          // if (roles) {
          //     if (this.authService.roleMatch(roles)) {
          //         return true;
          //     }
          //     else {
          //         this.router.navigate(['forbidden']);
          //         return false;
          //     }
          // }
          return true
      }
      console.log(this.tokenService.getToken());
      this.router.navigate(['deshboard']);
      return false
  }
  
}
