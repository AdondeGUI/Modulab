import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LabModulesModule } from './LabModules';
import { AccountModule } from './account';
import { LoginModule } from './login';
// import { LabDirectoryComponent } from './lab-directory/lab-directory.component';
import { LabGeneratorComponent } from './lab-generator/lab-generator.component';
import { HttpClientModule } from '@angular/common/http';
import { DirectoryModule } from './directory';

const defaultRoute = 'lab-generator';

@NgModule({
  imports: [
    BrowserModule,
    LabModulesModule,
    AccountModule,
    LoginModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: defaultRoute, pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    // LabDirectoryComponent,
    LabGeneratorComponent
  ],
  bootstrap: [
    AppComponent,
    // LabDirectoryComponent
  ]
})

export class AppModule { }
