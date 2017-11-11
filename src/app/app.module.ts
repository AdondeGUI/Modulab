import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LabModulesModule } from './LabModules';
import { LoginModule } from './login';
import { labDirectoryComponent } from './lab-directory/lab-directory.component';
import { accountNavComponent } from './account-nav/account-nav.component';

@NgModule({
  imports: [ 
    BrowserModule,
    LabModulesModule,
    LoginModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    labDirectoryComponent,
    accountNavComponent
  ],
  bootstrap: [
    AppComponent,
    labDirectoryComponent,
    accountNavComponent
  ]
})

export class AppModule { }
