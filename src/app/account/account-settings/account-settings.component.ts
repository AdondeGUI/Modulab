import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../domain/index';
import { HttpClient } from '@angular/common/http';
import { UserManager } from '../../user-manager.service';

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
    private userManager: UserManager,
    private http: HttpClient
  ) { }

  private save() {
    this.router.navigateByUrl('');
  }

}
