import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../domain/models/user';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserManager } from '../../user-manager.service';
import { UserRepository } from '../../domain/index';

@Component({
  selector: 'login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css']
})
export class LoginNewComponent{

  private newUser = new User();
  private passwordConfirm = "";
  private passwordMismatch = 1;
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userManager: UserManager,
    private userRepository: UserRepository
  ) { }

  private addUser() {
    if(!this.newUser.email || !this.newUser.password || !this.newUser.first_name || !this.newUser.last_name || !this.newUser.role){
      alert("Please fill out all fields to proceed.");
    }
    else if (this.newUser.password != this.passwordConfirm) {
      this.passwordMismatch = 0;
    }
    else{
      this.userRepository.postUser(this.newUser.first_name, this.newUser.last_name, this.newUser.email, this.newUser.password, this.newUser.role).subscribe();
      this.userRepository.getUser(this.newUser.email).subscribe(data => { 
        this.userManager.user = data[0];
        console.log("HERE!");
        this.router.navigateByUrl('/directory');
      });
    }
  }
}
