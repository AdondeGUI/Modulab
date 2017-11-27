import { Component, OnInit, Input } from '@angular/core';
import { Module, Lab, User, ModuleRepository, LabRepository } from '../domain/index';
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
  public modules : Module[];
  public lab: Lab;

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private moduleRepository: ModuleRepository,
    private labRepository: LabRepository
  ) {
    this.lab = new Lab();
  }

  private addModule() {
    this.newModule = new Module();
    this.newModule.type = "table";
    this.modules.push(this.newModule);
    // var dataTmp = JSON.parse('[{"0":"234","1":"234234","2":"2443","one":1},{"0":"3344","1":"fffs","2":"s34","one":2},{"0":"342f","1":"gfde","2":"45ggf","one":3}]');
    // this.moduleRepository.postModule(4, "1823", dataTmp);

  }

  private removeModule(index: number) {
    this.modules.splice(index, 1);
  }

  public ngOnInit(){
    this.activatedRoute.params.subscribe(x => this.loadRoute(x));
    // this.modules.push(this.newModule);
    console.log(this.modules);
  }

  private loadRoute(params: any) {
      if (params.id) {
        this.labRepository.getIndLab(+params.id).subscribe(x => this.lab = x[0]);
        this.moduleRepository.getLabModules(+params.id).subscribe(x => this.modules = x);
      }
  }

  private saveLab(){
    //delete all modules currently associated with the lab_id
    // var currModules;
    // this.moduleRepository.getLabModules(this.lab.lab_id).subscribe(x => currModules = x);
    //
    // //for loop post all modules both old and new
    // for(var mod in currModules){
    //   this.moduleRepository.deleteModule(this.lab.lab_id, mod.module_id)
    // }
    // for(var newMod in this.modules){
    //   this.moduleRepository.postModule(this.lab.lab_id, newMod.module_id, newMod.data)
    // }
     }
}
