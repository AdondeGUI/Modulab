import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserManager } from '../../user-manager.service';
import { User } from '../../domain/index';

@Component({
  selector: 'account-nav',
  templateUrl: 'account-nav.component.html',
  styleUrls: [ 'account-nav.component.css' ]
})

export class AccountNavComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userManager: UserManager
  ) { }

  private navigateToDirectory() {
    this.router.navigateByUrl('directory');
  }

  private navigateToSettings() {
    this.router.navigateByUrl('settings');
  }

  private logOut() {
    this.userManager.user = new User();
    this.router.navigateByUrl('landing-page');
  }

  private addFileFromNav() {
  }
}