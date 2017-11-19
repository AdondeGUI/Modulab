import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'landing-page',
  templateUrl: 'landing-page.component.html',
  styleUrls: [ 'landing-page.component.css' ]
})

export class LandingPageComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  private navigateToNewLogin() {
    this.router.navigateByUrl('newlogin');
  }

  private navigateToLogin() {
    this.router.navigateByUrl('login');
  }

}