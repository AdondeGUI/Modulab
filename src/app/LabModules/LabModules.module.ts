import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableGeneratorComponent } from './table-generator/table-generator.component';
import { TextModuleComponent } from './text-module/text-module.component';
import { LabModuleComponent } from './lab-module.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        TableGeneratorComponent,
        TextModuleComponent,
        LabModuleComponent
    ],
    exports: [
        TableGeneratorComponent,
        TextModuleComponent,
        LabModuleComponent
    ]
})

export class LabModulesModule {

}
