import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../domain/index';
import { Router, ActivatedRoute } from '@angular/router';
import { UserManager } from '../../user-manager.service';
import { UserRepository } from "../../domain"

@Component({
  selector: 'login-existing',
  templateUrl: './login-existing.component.html',
  styleUrls: ['./login-existing.component.css']
})
export class LoginExistingComponent {
  private loginAttempt = new User();

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userManager: UserManager,
    private userRepository : UserRepository
  ) {  }

  private login(){
    this.userRepository.getUser(this.loginAttempt.email).subscribe(data => {   
      if(data.length == 0)
      {
        alert("Email and/or password incorrect. Please try again")
      }
      else{
        let returnUser = data[0];
        if(this.loginAttempt.email && this.loginAttempt.password){
          if(this.loginAttempt.email === returnUser.email && this.loginAttempt.password === returnUser.password){
            this.userManager.user = data[0];
            this.router.navigateByUrl('/directory');
          }
          else{
            alert("Email and/or password incorrect. Please try again");
            this.router.navigateByUrl('/login');
          }
        }
        else{
          alert("Please fill in both email and password to log in")
        }
      }
    })
  }
}
