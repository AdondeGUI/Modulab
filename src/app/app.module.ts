import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginModule } from './LabModules/login';
import { LabModulesModule } from './LabModules'
import { labDirectoryComponent } from './lab-directory/lab-directory.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    LoginModule,
    LabModulesModule
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
