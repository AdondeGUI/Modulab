import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User, UserRepository } from '../../domain/index';
import { HttpClient } from '@angular/common/http';
import { UserManager } from '../../user-manager.service';

@Component({
  selector: 'account-settings',
  templateUrl: 'account-settings.component.html',
  styleUrls: [ 'account-settings.component.css' ]
})

export class AccountSettingsComponent {
  private updatedUser = new User();
  private passwordConfirm = "";
  private passwordMismatch = 1;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userManager: UserManager,
    private userRepository: UserRepository,
    private http: HttpClient
  ) { }

  private ngOnInit(){
    this.updatedUser = this.userManager.user;
  }

  private save() {
    if(!this.updatedUser.first_name || !this.updatedUser.last_name || !this.updatedUser.email || !this.updatedUser.password){
      alert("All fields must be filled");
    }
    else if (this.updatedUser.password != this.passwordConfirm) {
      this.passwordMismatch = 0;
    }
    else{
      this.userRepository.putUser(this.updatedUser.first_name, this.updatedUser.last_name, this.updatedUser.email,this.updatedUser.password).subscribe(x => this.userManager.user = x[0]);
      alert("User settings updated");
      this.router.navigateByUrl("/settings");
    }
  }

}
