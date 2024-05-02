import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/model/user';
import { UsersServiceService } from 'src/app/services/users-service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users!: user[];
  errorMessage: any;

  constructor(private userService: UsersServiceService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (posts) => {
        this.users = posts;
        console.log(this.users);
      },
      error: (error) => {
        this.errorMessage = error;
      }
    });
  }

}
