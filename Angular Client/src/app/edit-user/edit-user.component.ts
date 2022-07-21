import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  public editUser: User | undefined;
  
  constructor(
    private userService: UserService, 
    private router: Router) {
      let data = this.router.getCurrentNavigation()?.extras.state;
      if (data) {
        this.editUser = data['user'];
      }
  };

  ngOnInit(): void {

  }

  public save(user: NgForm): void {
    this.userService.updateUser(user.value).subscribe(
      (responese: User) => {
        console.log(responese);
      }
    )
  }

  public keyPressAlphanumeric(event: any) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  public keyPressForName(event: any) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z' ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

}
