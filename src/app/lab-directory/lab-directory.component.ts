import { Component, OnInit, Input } from '@angular/core';
import { Folder, User, CourseRepository, LabRepository, Lab } from '../domain/index';
import { AccountModule } from '../account';
import { HttpClient } from '@angular/common/http';
import { Course } from '../domain/models/course';
import { UserManager } from '../user-manager.service';

@Component({
  selector: 'lab-directory',
  templateUrl: 'lab-directory.component.html',
  styleUrls: [ 'lab-directory.component.css' ]
})

export class LabDirectoryComponent {
  private user = new User();
  private newCourse = new Course();
  // private newCourseName = "";
  private newTemplateName = "";
  private newReportName = "";
  public newTemplateSelect = "";

  @Input()

  public courses : Course[];
  public enrolledCourses : Course[];
  public labs : Lab[];
  
  constructor(
    private http: HttpClient,
    private courseRepository: CourseRepository,
    private labRepository: LabRepository,
    private userManager: UserManager ) 
    {
    // this.user.id = 1;
    // this.newCourse.course_id = 3345;
    // this.newCourse.instructor = "Fontenot";
    // this.newCourse.title = "DB";
    // this.courses = [{ID:1, course_id:1301, title:'Basket-Weaving', instructor:'Mark Fontenot'},
    //                 {ID:2, course_id:1302, title:'Basket-Weaving II', instructor:'Mark Fontenot'},
    //                 {ID:3, course_id:3205, title:'Ethics of Spongebob', instructor:'Frank Coyle'},
    //                 {ID:4, course_id:4303, title:'Painting: Just Don\'t', instructor:'Donald Evans'}];
    // this.templateNames = ["Template 1", "Template 2"];
    }

  // private addCourseName() {
  //   this.courseNames.push(this.newCourseName);
  //   this.newCourseName = "";
  // }

  public ngOnInit(){
    this.courseRepository.getUserCourses().subscribe(x => this.enrolledCourses = x);
    this.courseRepository.getAllCourses().subscribe(x => this.courses = x);
    this.labRepository.getAllLabs().subscribe(x => this.labs = x);
  }

  private enrollInCourse(index: number) {
    this.courseRepository.enrollCourse(this.courses[index].course_id, this.courses[index].title, this.courses[index].instructor).subscribe();
    this.courseRepository.getUserCourses().subscribe(x => this.enrolledCourses = x);
  }

  private removeCourse(index: number) {
    this.courseRepository.deleteUserCourse(this.courses[index].course_id).subscribe();
    this.courseRepository.getUserCourses().subscribe(x => this.enrolledCourses = x);
    // this.courseNames.splice(index, 1);
  }

  // private removeTemplate(index: number) {
  //   this.templateNames.splice(index, 1);
  // }

}
