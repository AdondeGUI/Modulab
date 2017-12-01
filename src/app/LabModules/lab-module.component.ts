import { Component, OnInit, Input } from '@angular/core';
import { Module } from '../domain/index';
import { Lab } from '../domain/index';
import { LabModulesModule } from '../LabModules';

@Component({
  selector: 'lab-module',
  templateUrl: 'lab-module.component.html',
  styleUrls: [ 'lab-module.component.css' ]
})

export class LabModuleComponent {
  private newModule = new Module();
  private moduleTypes = ['Table','Hypothesis','Conclusion','Appendix','Process','Method','Text']

  @Input()
  public module : Module;
  public modules : Module[] = [];

  constructor() {
  }
}
