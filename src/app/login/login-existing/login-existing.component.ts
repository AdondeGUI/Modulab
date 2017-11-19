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
      console.log(data);
      //var returnUser = data[0]
      // this.user.email = data[0].email
      // this.user.firstname = data[0].first_name
      // this.user.lastname = data[0].last_name
      // this.user.role = data[0].role
      // this.user.password = data[0].password
    });
    // if(!this.user.email){
    //   alert("User does not exist")
    // }
    //console.log(this.user)
    console.log(this.user)
  }
}
