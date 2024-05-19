import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  userLoggedIn = '';
  constructor(private authorizationService: AuthorizationService, private tokenStorage: TokenStorageService, 
              private route: ActivatedRoute, private router: Router) { }
    
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  get f() { 
    return this.form.controls; 
  }

  ngOnInit(): void { } 
  
  submit() {
    if (this.form.status === 'VALID') {
      this.authorizationService.login( <string>this.form.controls['email'].value , <string>this.form.controls['password'].value )
            .subscribe({
              next: (data) => {
                this.tokenStorage.saveToken(data);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.userLoggedIn = <string>this.tokenStorage.getEmail();
                this.router.navigateByUrl('/deshboard');
          },
          error: (err) => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
          },
          complete : ()=>console.log('Fin')
        });
      }    
    }
}
