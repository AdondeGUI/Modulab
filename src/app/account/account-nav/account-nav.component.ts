import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'account-nav',
  templateUrl: 'account-nav.component.html',
  styleUrls: [ 'account-nav.component.css' ]
})

export class AccountNavComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  private navigateToDirectory() {
    this.router.navigateByUrl('directory');
  }

  private navigateToSettings() {
    this.router.navigateByUrl('settings');
  }

  private logOut() {
  
  }

  private addFileFromNav() {
  }
}