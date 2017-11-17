import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../domain/models/user';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css']
})
export class loginNewComponent{

  private newUser = new User();

  @Input()
  public users : User[] = [];

  results: String;
  

  constructor(private http: HttpClient) { 

    this.http.get('http://52.15.171.47/users').subscribe(data => {
      // Read the result field from the JSON response.
      //this.results = data;
      console.log(data);
    });
    // $("[name='my-checkbox']").bootstrapSwitch();
  }

  private addUser() {
    if(!this.newUser.email || !this.newUser.password || !this.newUser.userName){
      alert("Please fill out all fields to proceed");
    }
    else{
      this.users.push(this.newUser);
      this.newUser = new User();
    }
  }
}
