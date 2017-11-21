import { Component, OnInit, Input } from '@angular/core';
import { Module, User } from '../domain/index';
import { Lab } from '../domain/index';
import { LabModulesModule } from '../LabModules';
import { LabModuleComponent } from '../LabModules/lab-module.component'
import { HttpClient } from '@angular/common/http';
import { Course } from '../domain/models/course';
import { AccountModule } from '../account';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lab-generator',
  templateUrl: 'lab-generator.component.html',
  styleUrls: [ 'lab-generator.component.css' ]
})

export class LabGeneratorComponent {
  private newFile = new Lab();
  private newModule = new Module();
  private moduleTypes = ['Image','Table','Hypothesis','Conclusion','Appendix','Process','Method','Text']

  @Input()
  public modules : Module[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.modules.push(this.newModule);
  }

  private addModule() {
    this.newModule = new Module();
    this.newModule.type = "text";
    this.modules.push(this.newModule);
  }

  private save() {
    this.router.navigateByUrl('directory');
  }
}
