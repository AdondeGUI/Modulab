import { ROUTES } from './routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DomainModule } from '../domain';
import { LabModulesModule } from '../LabModules';
import { AccountModule } from '../account';
import { LoginModule } from '../login/login.module';
import { LabDirectoryComponent } from '../lab-directory/lab-directory.component';
import { LabGeneratorComponent } from '../lab-generator/lab-generator.component';
import { LoginExistingComponent } from '../login/login-existing/login-existing.component'
import { LoginNewComponent } from '../login/login-new/login-new.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AccountModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    LabDirectoryComponent,
    LabGeneratorComponent,
    LoginExistingComponent,
    LoginNewComponent
  ],
  exports: [
    LabDirectoryComponent,
    LabGeneratorComponent,
    LoginExistingComponent,
    LoginNewComponent
  ]
})
export class DirectoryModule { }