import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { tableGeneratorComponent } from './table-generator/table-generator.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        tableGeneratorComponent,
    ],
    exports: [
        tableGeneratorComponent
    ]
})
export class LabModulesModule {

}
