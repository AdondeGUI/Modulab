import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../domain/index';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'account-settings',
  templateUrl: 'account-settings.component.html',
  styleUrls: [ 'account-settings.component.css' ]
})

export class AccountSettingsComponent {
  private user = new User();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { 
    this.user.firstname = "Bob";
    this.user.lastname = "Smith";
    this.user.email = "newemail@mail.com";
    this.user.password = "newpassword";
    this.user.id = 2;
  }

  private save() {
    this.router.navigateByUrl('');
  }

  private updateUser() {
    const body = {first_name: this.user.firstname, last_name: this.user.lastname, email: this.user.email, password: this.user.password}
    this.http.put('http://52.15.171.47/users/'+this.user.id, body).subscribe();
  }

  private deleteUser() {
    this.http.delete('http://52.15.171.47/users/'+this.user.id).subscribe();
  }

}
