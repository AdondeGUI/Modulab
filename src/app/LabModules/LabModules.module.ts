import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { tableGeneratorComponent } from './table-generator/table-generator.component';
import { labDirectoryComponent } from './lab-directory/lab-directory.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        tableGeneratorComponent,
        labDirectoryComponent
    ],
    exports: [
        tableGeneratorComponent,
        labDirectoryComponent
    ]
})
export class LabModulesModule {

}
