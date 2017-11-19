import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../domain/index';

@Component({
  selector: 'login-existing',
  templateUrl: './login-existing.component.html',
  styleUrls: ['./login-existing.component.css']
})
export class LoginExistingComponent {
  private loginAttempt = new User();
  private user = new User();

  constructor(private http: HttpClient) {
  }

  private getUser() {
    this.http.get('http://52.15.171.47/login/'+this.loginAttempt.email).subscribe(data => {
      var returnUser = data[0]
      this.user = returnUser
      this.user.id = returnUser.id
      console.log(returnUser)
      // this.user.email = returnUser.email
      // this.user.firstname = returnUser.first_name
      // this.user.lastname = returnUser.last_name
      // this.user.role = returnUser.role
      // this.user.password = returnUser.password
    });
    console.log(this.user)
    console.log(this.user.password)
  }
}
