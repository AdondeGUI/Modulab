import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LabModulesModule } from './LabModules';
import { LoginModule } from './login';

@NgModule({
  imports: [ 
    BrowserModule,
    LabModulesModule,
    LoginModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
