import { Component, OnInit, Input } from '@angular/core';
import { Folder, User } from '../domain/index';
import { AccountModule } from '../account';
import { HttpClient } from '@angular/common/http';
import { Course } from '../domain/models/course';

@Component({
  selector: 'lab-directory',
  templateUrl: 'lab-directory.component.html',
  styleUrls: [ 'lab-directory.component.css' ]
})

export class LabDirectoryComponent {
  private user = new User();
  private newCourse = new Course();
  private newCourseName = "";
  private newTemplateName = "";
  private newReportName = "";
  public newTemplateSelect = "";

  @Input()

  public courses : Course[] = [];
  public courseNames : string[] = [];
  public templateNames : string[] = [];
  
  constructor(private http: HttpClient) {
    this.user.id = 1;
    this.newCourse.course_id = 3345;
    this.newCourse.instructor = "Fontenot";
    this.newCourse.title = "DB";
    this.courses = [{ID:1, course_id:1301, title:'Basket-Weaving', instructor:'Mark Fontenot'},
                    {ID:2, course_id:1302, title:'Basket-Weaving II', instructor:'Mark Fontenot'},
                    {ID:3, course_id:3205, title:'Ethics of Spongebob', instructor:'Frank Coyle'},
                    {ID:4, course_id:4303, title:'Painting: Just Don\'t', instructor:'Donald Evans'}]
    this.courseNames = ["Course 1", "Course 2"];
    this.templateNames = ["Template 1", "Template 2"];
  }

  private addCourseName() {
    this.courseNames.push(this.newCourseName);
    this.newCourseName = "";
  }

  private addTemplateName() {
    this.templateNames.push(this.newTemplateName);
    this.newTemplateName = "";
  }

  private addReportName() {
    this.templateNames.push(this.newReportName);
    this.newReportName = "";
  }

  private enrollInCourse(index: number) {
    this.courseNames.push(this.courses[index].title);
  }

  private removeCourse(index: number) {
    this.courseNames.splice(index, 1);
  }

  private removeTemplate(index: number) {
    this.templateNames.splice(index, 1);
  }

  private createCourse(){
    const body = {ID: this.user.id, course_id: this.newCourse.course_id, instructor: this.newCourse.instructor, title: this.newCourse.title}
    this.http.post('http://52.15.171.47/courses', body).subscribe();
  }

  private deleteCourse(index : number){
    let courseID = 3345;
    // let courseID = this.courses[index].course_id;
    this.http.delete('http://52.15.171.47/courses/classes/'+courseID).subscribe();
  }

  private enroll(index : number){
    const body = {ID: this.user.id, course_id: this.courses[index].course_id, title: this.courses[index].title, instructor: this.courses[index].instructor}
    this.http.post('http://52.15.171.47/courses', body).subscribe()
  }

}
