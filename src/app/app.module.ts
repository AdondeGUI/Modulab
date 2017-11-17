import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LabModulesModule } from './LabModules';
import { accountModule } from './account';
import { LoginModule } from './login';
import { labDirectoryComponent } from './lab-directory/lab-directory.component';

@NgModule({
  imports: [ 
    BrowserModule,
    LabModulesModule,
    accountModule,
    LoginModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    labDirectoryComponent
  ],
  bootstrap: [
    AppComponent,
    labDirectoryComponent
  ]
})

export class AppModule { }
