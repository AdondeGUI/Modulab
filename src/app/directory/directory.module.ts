import { DIRECTORY_ROUTES } from './directory-routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DomainModule } from '../domain';
import { LabModulesModule } from '../LabModules';
import { AccountModule } from '../account';
import { LoginModule } from '../login';
import { LabDirectoryComponent } from '../lab-directory/lab-directory.component';
import { LabGeneratorComponent } from '../lab-generator/lab-generator.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AccountModule,
    RouterModule.forChild(DIRECTORY_ROUTES)
  ],
  declarations: [
    LabDirectoryComponent,
    LabGeneratorComponent
  ],
  exports: [
    LabDirectoryComponent,
    LabGeneratorComponent
  ]
})
export class DirectoryModule { }