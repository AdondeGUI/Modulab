import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableGeneratorComponent } from './table-generator/table-generator.component';
import { TextModuleComponent } from './text-module/text-module.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        TableGeneratorComponent,
        TextModuleComponent
    ],
    exports: [
        TableGeneratorComponent,
        TextModuleComponent
    ]
})
export class LabModulesModule {

}
