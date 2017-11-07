import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableGeneratorComponent } from './table-generator/table-generator.component';
import { TextModuleComponent } from './text-module/text-module.component';
import { labDirectoryComponent } from './lab-directory/lab-directory.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        TableGeneratorComponent,
        TextModuleComponent,
        labDirectoryComponent
    ],
    exports: [
        TableGeneratorComponent,
        TextModuleComponent,
        labDirectoryComponent
    ]
})
export class LabModulesModule {

}
