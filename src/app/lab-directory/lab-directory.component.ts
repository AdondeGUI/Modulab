import { Component, OnInit, Input } from '@angular/core';
import { Folder } from '../domain/index';
import { AccountModule } from '../account';

@Component({
  selector: 'lab-directory',
  templateUrl: 'lab-directory.component.html',
  styleUrls: [ 'lab-directory.component.css' ]
})

export class LabDirectoryComponent {
  private newCourse = "";
  private newTemplate = "";

  @Input()
  public courses : string[] = [];
  public templates : string[] = [];

  constructor() {
    this.courses = ["Course 1", "Course 2"];
    this.templates = ["Template 1", "Template 2"];
  }

  private addCourse() {
    this.courses.push(this.newCourse);
    this.newCourse = "";
  }

  private addTemplate() {
    this.templates.push(this.newTemplate);
    this.newTemplate = "";
  }
}
