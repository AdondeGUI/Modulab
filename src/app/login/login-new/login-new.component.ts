import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../domain/models/user';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css']
})
export class LoginNewComponent{

  private newUser = new User();
  private passwordConfirm = "";

  @Input()
  public users : User[] = [];

  results: String;
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  private addUser() {
    if(!this.newUser.email || !this.newUser.password || !this.newUser.firstname || !this.newUser.lastname || !this.newUser.role){
      alert("Please fill out all fields to proceed.");
    }
    else if (this.newUser.password != this.passwordConfirm) {
      alert("Passwords do not match.")
    }
    else{
      // this.users.push(this.newUser);
      const body = {first_name: this.newUser.firstname, last_name: this.newUser.lastname, email: this.newUser.email, password: this.newUser.password, role: this.newUser.role}
      this.http.post('http://52.15.171.47/users', body).subscribe()
      this.newUser = new User();
      this.router.navigateByUrl('directory');
    }
  }
}
