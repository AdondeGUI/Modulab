import { NgModule } from '@angular/core';
import{ BrowserModule } from '@angular/platform-browser';
import{ TextData } from './models/text-data';
import { UserRepository } from './repositories/user-repository.service'
import { LabRepository } from './repositories/lab-repository.service';
import { ModuleRepository } from './repositories/module-repository.service';
import { CourseRepository } from './repositories/course-repository.service';


@NgModule({
    imports: [BrowserModule],
    // declarations:[TextData],
    // exports:[TextData],
    providers:[
        UserRepository,
        LabRepository,
        ModuleRepository,
        CourseRepository
    ]
})

export class DomainModule{

}