import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { loginExistingComponent } from './login/login-existing/login-existing.component';
import { loginNewComponent } from './login/login-new/login-new.component';
import { tableGeneratorComponent } from './table-generator/table-generator.component';
import { labDirectoryComponent } from './lab-directory/lab-directory.component';
import { ImageModuleComponent } from './image-module/image-module.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [

        tableGeneratorComponent,
        labDirectoryComponent,
        ImageModuleComponent
    ],
    exports: [
        tableGeneratorComponent,
        labDirectoryComponent,
        ImageModuleComponent
    ]
})
export class LabModulesModule {

}
