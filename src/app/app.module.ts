import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LabModulesModule } from './LabModules';
import { LoginModule } from './login';
import { labDirectoryComponent } from './lab-directory/lab-directory.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [ 
    BrowserModule,
    LabModulesModule,
    LoginModule,
    FormsModule,
    HttpClientModule
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
