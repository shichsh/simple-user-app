import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public users: User[] = [];

  constructor(private userService: UserService) {};
  
  public listUsers(): void {
    this.userService.listUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      }
    );
  }

  public save(user: NgForm): void {
    this.userService.addUser(user.value).subscribe(
      (responese: User) => {
        console.log(responese);
      }
    )
  }
  
}
