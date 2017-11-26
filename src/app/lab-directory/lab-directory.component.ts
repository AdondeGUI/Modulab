import { Component, OnInit, Input } from '@angular/core';
import { Folder, User, CourseRepository, LabRepository, Lab } from '../domain/index';
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

  @Input()

  public courses : Course[];
  public enrolledCourses : Course[];
  public labs : Lab[];
  
  constructor(
    private http: HttpClient,
    private courseRepository: CourseRepository,
    private labRepository: LabRepository,
    private router: Router,
    private userManager: UserManager ) 
    {
      this.newTemplateSelectCourse = {};
      this.newTemplateSelect = {};
    }

  public ngOnInit(){
    this.courseRepository.getUserCourses().subscribe(x => this.enrolledCourses = x);
    this.courseRepository.getAllCourses().subscribe(x => this.courses = x);
    this.labRepository.getAllLabs().subscribe(x => this.labs = x);
  }

  private enrollInCourse(index: number) {
    this.courseRepository.enrollCourse(this.courses[index].course_id, this.courses[index].title, this.courses[index].instructor).subscribe();
    this.courseRepository.getUserCourses().subscribe(x => this.enrolledCourses = x);
    this.trimCourses();
    this.router.navigateByUrl("/directory");
  }

  private removeCourse(index: number) {
    this.courseRepository.deleteUserCourse(this.courses[index].course_id).subscribe();
    console.log(this.courses);
    this.courseRepository.getUserCourses().subscribe(x => this.enrolledCourses = x);
    this.router.navigateByUrl("/directory");
  }

  //create a new course with the given information
  private createCourse(){
    this.courseRepository.createCourse(this.newCourseNumber, this.newCourseName).subscribe();
    this.courseRepository.getUserCourses().subscribe(x => this.enrolledCourses = x);
  }

  private createLab(){
    this.labRepository.postLab(this.newReportName, this.newTemplateSelectCourse.course_id).subscribe(
      data => this.navigateToLab(data[0].lab_id)
    );
  }

  private removeLab(index: number){
    this.labRepository.deleteIndLab(this.labs[index].lab_id).subscribe();
    this.labRepository.getAllLabs().subscribe(x => this.labs = x);
  }

  private loadLab(index: number){
    this.navigateToLab(this.labs[index].lab_id);
  }

  private navigateToLab(labid: number){
    this.router.navigateByUrl('/lab-generator/' + ""+labid);
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
