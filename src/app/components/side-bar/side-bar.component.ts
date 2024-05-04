import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  public totalItem : number = 0;

  constructor(private tokenService:TokenStorageService,private router:Router){}
  ngOnInit(): void {
  }

  private showNavbar = true;

  setShowNavbar(value: boolean) {
       this.showNavbar = value;
   }
            
    getShowNavbar() {
       return this.showNavbar;
    }
  onLogOut(){
    this.tokenService.signOut();
    this.router.navigate(['login']);
  }

  isLoggedIn() {
    return this.tokenService.getToken() !== null;
  }
  

  
}
