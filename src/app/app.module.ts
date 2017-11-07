import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginModule } from './LabModules/login';
import { LabModulesModule } from './LabModules'

@NgModule({
  imports: [ 
    BrowserModule,
    LoginModule,
    LabModulesModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
