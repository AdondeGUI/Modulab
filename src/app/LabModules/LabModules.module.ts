import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageModuleComponent } from './image-module/image-module.component';
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
        ImageModuleComponent,
        TextModuleComponent,
        LabModuleComponent
    ],
    exports: [
        TableGeneratorComponent,
        ImageModuleComponent,
        TextModuleComponent,
        LabModuleComponent
    ]
})

export class LabModulesModule {

}
