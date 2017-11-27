import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Lab, User, Module} from '../domain'
import { UserManager } from '../user-manager.service';

@Component({
  selector: 'landing-page',
  templateUrl: 'landing-page.component.html',
  styleUrls: [ 'landing-page.component.css' ]
})

export class LandingPageComponent {
  private imageName = "background.jpg";
  private user = new User();
  private lab = new Lab();
  private module = new Module();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private userManager: UserManager
  ) {     }

  public ngOnInit(){
    //this.user = this.userManager.user;
  }

  private navigateToNewLogin() {
    this.router.navigateByUrl('newlogin');
  }

  private navigateToLogin() {
    this.router.navigateByUrl('login');
  }

}