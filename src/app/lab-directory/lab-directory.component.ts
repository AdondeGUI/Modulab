import { Component, OnInit, Input } from '@angular/core';
import { Folder, User, CourseRepository, LabRepository, Lab, ModuleRepository, Labid, UserRepository } from '../domain/index';
import { AccountModule } from '../account';
import { HttpClient } from '@angular/common/http';
import { Course } from '../domain/models/course';
import { UserManager } from '../user-manager.service';
import { Router } from '@angular/router';
import { String } from 'core-js/library/web/timers';

@Component({
  selector: 'lab-directory',
  templateUrl: 'lab-directory.component.html',
  styleUrls: [ 'lab-directory.component.css' ]
})

export class LabDirectoryComponent {
  // private user = new User();
  private newCourseName = "";
  private newCourseNumber: number;
  private newTemplateName = "";
  private newReportName = "";
  public newTemplateSelect: Lab;
  public newTemplateSelectCourse: Course;
  private viewLabCourse : Course = {ID: 1, title: " ", instructor:" ", course_num: 1, role: 0};

  @Input()

  public courses : Course[] = [];
  public enrolledCourses : Course[] = [];
  public labs : Lab[] = [];
  public templates: Lab[] = [];
  public labsToView : Lab[] = [];

  constructor(
    private http: HttpClient,
    private courseRepository: CourseRepository,
    private labRepository: LabRepository,
    private userRepository: UserRepository,
    private moduleRepository: ModuleRepository,
    private router: Router,
    private userManager: UserManager )
    {
      this.newTemplateSelectCourse = new Course();
      this.newTemplateSelect = new Lab();
    }

  public ngOnInit(){
    this.userRepository.getUser(this.userManager.user.email).subscribe(data => {
      this.userManager.user = data[0];
      if(this.userManager.user.role == 0)
        this.courseRepository.getUserCourses().subscribe(x => this.enrolledCourses = x);
      else
        this.courseRepository.getTeacherCourses().subscribe(x => this.enrolledCourses = x);
    });
    
    this.courseRepository.getAllCourses().subscribe(x => this.courses = x);
    this.labRepository.getAllLabs().subscribe(x => this.labs = x);
  }

  private enrollInCourse(index: number) {
    this.courseRepository.enrollCourse(this.courses[index].course_num, this.courses[index].title, this.courses[index].instructor).subscribe(data => {
      this.courseRepository.getUserCourses().subscribe(x => {
        this.enrolledCourses = x
        this.trimCourses();
        this.router.navigateByUrl("/directory");
      });
    });
  }

  private removeCourse(index: number) {
    this.courseRepository.deleteUserCourse(this.enrolledCourses[index].course_num).subscribe(data => {
      this.courseRepository.getUserCourses().subscribe(x => {
        this.enrolledCourses = x
        this.courseRepository.getAllCourses().subscribe(y => {
          this.courses = y
          this.router.navigateByUrl("/directory");
        });
      });
    });
  }

  private viewLabs(index: number) {
    this.labRepository.getAllLabs().subscribe(x => this.labsToView = x);
    // this.viewLabCourse = this.courses[index];
  }

  private getCourseTemplates(){
    this.labRepository.getTemplates(this.newTemplateSelectCourse.course_num).subscribe(data => this.templates = data);
  }

  //create a new course with the given information
  private createCourse(){
    this.courseRepository.createCourse(this.newCourseNumber, this.newCourseName).subscribe(data => {
      this.courseRepository.getUserCourses().subscribe(x => this.enrolledCourses = x);
    });
  }

  private createLab(i: number){
    if(this.newTemplateSelect.title){
      //create empty lab for local template
      let newLabID = 0;
      //get the template and store it locally
        this.labRepository.postLab(this.newTemplateSelectCourse.title.split(' ').join('_'), this.newTemplateSelectCourse.course_num).subscribe(data => {
          this.labRepository.getLabid(data.title, data.course_num, data.role).subscribe(x => {
            let xlength = x.length-1
            this.moduleRepository.getLabModules(this.newTemplateSelect.lab_id).subscribe(mods => {
              for(let item of mods){
                this.moduleRepository.postModule(x[xlength].lab_id, item.type, item.data).subscribe()
              }
              this.navigateToLab(x[xlength].lab_id)
            })
          })
        })
    }
    else{
    this.labRepository.postLab(this.newReportName.split(' ').join('_'), this.newTemplateSelectCourse.course_num).subscribe(
      data => {
        this.labRepository.getLabid(data.title, data.course_num, data.role).subscribe(nav => this.navigateToLab(nav[0].lab_id))
      });
    }
  }

  private removeLab(index: number){
    this.labRepository.deleteIndLab(this.labs[index].lab_id).subscribe(data => {
      this.labRepository.getAllLabs().subscribe(x => this.labs = x);
    });
    
  }

  private loadLab(index: number){
    this.navigateToLab(this.labs[index].lab_id);
  }

  private navigateToLab(labid: number){
    this.router.navigateByUrl('/lab-generator/' + ""+labid);
  }

  private deleteCourse(index: number) {
    this.courseRepository.deleteIndCourse(this.enrolledCourses[index].course_num).subscribe();
  }

  private trimCourses(){
    for(let item of this.enrolledCourses){
      for(var _i = 0; _i < this.courses.length; _i++){
        if(item.title == this.courses[_i].title){
          this.courses.splice(_i,1);
        }
      }
    }
  }

}
