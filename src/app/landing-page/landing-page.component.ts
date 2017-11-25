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
  ) {     
    // this.user.firstname = "Bob";
    // this.user.lastname = "Smith";
    // this.user.email = "newemail@mail.com";
    // this.user.password = "newpassword";
    // this.user.id = 1;
    
    // this.lab.title = "Testpost";
    // this.lab.course_id = 1234;
    // this.lab.lab_id = 1;

    // this.module.type = "text";
    // this.module.lab_id = this.lab.lab_id;
    // this.module.module_id = 22;
    // this.module.data = {xyz: "TESTTEST"};
  }

  public ngOnInit(){
    //this.user = this.userManager.user;
  }

  private navigateToNewLogin() {
    this.router.navigateByUrl('newlogin');
  }

  private navigateToLogin() {
    this.router.navigateByUrl('login');
  }

  // //done
  // public getUser(attempt: string) {
  //     this.http.get('http://52.15.171.47/login/'+attempt).subscribe(data => {
  //       this.userManager.user = data[0];
  //       this.router.navigateByUrl('/directory');
  //     });
  // }

  // //done
  // //get all labs for a particular user
  // private getLabs() {
  //   this.http.get('http://52.15.171.47/users/'+ this.user.id +'/labs').subscribe(data => {
  //     console.log(data);
  //   });
  // }

  // //done
  // //post a new lab
  // private postLab() {
  //   const body = {title: this.lab.title, course_id: this.lab.course_id};
  //   this.http.post('http://52.15.171.47/users/'+this.user.id+'/labs', body).subscribe();
  // }

  // //done
  // //get an individual lab
  // private getIndLab(){
  //   this.http.get('http://52.15.171.47/users/'+ this.user.id +'/labs/' + this.lab.lab_id).subscribe(data => {
  //     console.log(data);
  //   });
  // }

  // //done
  // //update a individual lab
  // private putLab() {
  //   const body = {title: "NewTitle"};
  //   this.http.put('http://52.15.171.47/users/' + this.user.id + '/labs/' + this.lab.lab_id, body).subscribe();
  // }

  // //done
  // //delete an individual lab
  // private deleteIndLab(){
  //   this.http.delete('http://52.15.171.47/users/'+ this.user.id +'/labs/' + this.lab.lab_id).subscribe();
  // }

  // //done
  // //get all modules for a particular lab
  // private getLabModules(){
  //   this.http.get('http://52.15.171.47/labs/'+ this.lab.lab_id +'/modules').subscribe(data => {
  //     console.log(data);
  //   });
  // }

  // //done
  // //create a new module on a lab 
  // private postModule() {
  //   const body = {type:this.module.type, data: JSON.stringify(this.module.data)};
  //   // const body = { type: this.module.type, data: this.module.data }; //type: this.module.type, data: this.module.data
  //   this.http.post('http://52.15.171.47/labs/'+ this.lab.lab_id +'/modules', body).subscribe();
  // }

  // //done
  // //get an individual module
  // private getIndModule(){
  //   this.http.get('http://52.15.171.47/labs/' + this.lab.lab_id + '/modules/' + this.module.module_id).subscribe(data => {
  //     console.log(data);
  //   });
  // }

  // //update a module on a lab lab
  // private putModule() {
  //   const body = {type:this.module.type, data: JSON.stringify(this.module.data)};
  //   this.http.put('http://52.15.171.47/labs/'+ this.lab.lab_id +'/modules/' + this.module.module_id, body).subscribe();
  // }

  // //done
  // //delete an individual module
  // private deleteModule(){
  //   this.http.delete('http://52.15.171.47/labs/' + this.lab.lab_id + '/modules/'  + this.module.module_id).subscribe();
  // }

  // //done
  // //Get all courses for a user
  // private getCourses(){
  //   this.http.get('http://52.15.171.47/courses/' + this.user.id).subscribe(data => {
  //     console.log(data);
  //   });
  // }

  // //done
  //   //Get a particular course
  //   private getIndCourse(){
  //     this.http.get('http://52.15.171.47/courses/classes/123').subscribe(data => {
  //       console.log(data);
  //     });
  //   }

}