import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'account-settings',
  templateUrl: 'account-settings.component.html',
  styleUrls: [ 'account-settings.component.css' ]
})

export class AccountSettingsComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  private save() {
    this.router.navigateByUrl('');
  }
}
