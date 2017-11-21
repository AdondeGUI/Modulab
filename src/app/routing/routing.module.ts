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
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { LoginExistingComponent } from '../login/login-existing/login-existing.component'
import { LoginNewComponent } from '../login/login-new/login-new.component'
import { LabGeneratorComponent } from '../lab-generator/lab-generator.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AccountModule,
    LabModulesModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    LabDirectoryComponent,
    LabGeneratorComponent,
    LandingPageComponent,
    LoginExistingComponent,
    LoginNewComponent
  ],
  exports: [
    LabDirectoryComponent,
    LabGeneratorComponent,
    LandingPageComponent,
    LoginExistingComponent,
    LoginNewComponent
  ]
})
export class DirectoryModule { }