import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserService) {};

  ngOnInit(): void {
  }

  public save(user: NgForm): void {
    this.userService.addUser(user.value).subscribe(
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
