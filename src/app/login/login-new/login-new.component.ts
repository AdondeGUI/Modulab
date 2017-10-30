import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../domain/models/user';

@Component({
  selector: 'login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css']
})
export class loginNewComponent {

  private newUser = new User();

  @Input()
  public users : User[] = [];

  constructor() { }

  private addUser() {
    this.users.push(this.newUser);
    this.newUser = new User();
  }
}
