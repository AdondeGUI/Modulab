import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User, Lab } from '../domain'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'account-settings',
  templateUrl: 'account-settings.component.html',
  styleUrls: [ 'account-settings.component.css' ]
})

export class AccountSettingsComponent {
  private user = new User();
  private lab = new Lab();

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

    this.lab.id = 5;
    this.lab.course_id = 1234;
  }

  private save() {
    this.router.navigateByUrl('');
  }

  private postLab() {
    const body = {title: this.lab.title, course_id: this.lab.course_id}
    this.http.put('http://52.15.171.47/users/'+this.user.id+'/labs', body).subscribe();
  }

  private deleteUser() {
    this.http.delete('http://52.15.171.47/users/'+this.user.id).subscribe();
  }

}
