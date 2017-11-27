import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User, UserRepository, LabRepository, ModuleRepository, Lab, CourseRepository } from '../../domain/index';
import { HttpClient } from '@angular/common/http';
import { UserManager } from '../../user-manager.service';

@Component({
  selector: 'account-settings',
  templateUrl: 'account-settings.component.html',
  styleUrls: [ 'account-settings.component.css' ]
})

export class AccountSettingsComponent {
  private updatedUser = new User();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userManager: UserManager,
    private userRepository: UserRepository,
    private courseRepository: CourseRepository,
    private labRepository: LabRepository,
    private moduleRepository: ModuleRepository,
    private http: HttpClient
  ) { }

  private ngOnInit(){
    this.updatedUser = this.userManager.user;
  }

  private save() {
    if(!this.updatedUser.first_name || !this.updatedUser.last_name || !this.updatedUser.email || !this.updatedUser.password){
      alert("All fields must be filled");
    }
    else{
      this.userRepository.putUser(this.updatedUser.first_name, this.updatedUser.last_name, this.updatedUser.email,this.updatedUser.password).subscribe(data => this.userManager.user = data);
      alert("User settings updated");
      this.router.navigateByUrl("/settings");
    }
  }

  private deleteUser(){
    let labs: Lab[];
    this.labRepository.getAllLabs().subscribe(data => {
      labs = data;
      for (let lab of labs){
        this.moduleRepository.deleteAllModules(lab.lab_id).subscribe();
      }
    });
    this.courseRepository.deleteUserCourses();
    this.labRepository.deleteAllLabs().subscribe();
    this.userRepository.deleteUser().subscribe();
    this.userManager.user = new User();
    this.router.navigateByUrl('landing-page');
  }

  private cancel() {
    location.reload();
  }
}
