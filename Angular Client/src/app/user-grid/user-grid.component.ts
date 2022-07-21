import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit {

  public users: User[] = [];
  pipe = new DatePipe('en-US');

  constructor(private userService: UserService, private router: Router) {};

  ngOnInit(): void {
    this.userService.listUsers().subscribe(
      (response: User[]) => {
        response.forEach(user => {
          user.lastUpdateDate = formatDate(user.lastUpdateDate, "dd-MMM-yy", 'en-US');
        })
        this.users = response;
      }
    );
  }

  public navigate(user: User): void {
    this.router.navigate(['edit-user'], {
      state: {user: user}
    });
  }

}
