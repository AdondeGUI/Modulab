import { Component, OnInit, Input } from '@angular/core';
import { Module } from '../domain/index';
import { Lab } from '../domain/index';
import { LabModulesModule } from '../LabModules';

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

  constructor() {
  }

  private addModule() {
    this.newModule = new Module();
    this.newModule.type = "hypothesis";
    this.modules.push(this.newModule);
  }

}
