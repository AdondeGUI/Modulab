import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { User } from './domain'

import { DirectoryModule } from './routing';

const defaultRoute = 'lab-generator';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DirectoryModule,
    RouterModule.forRoot([
      { path: '', redirectTo: defaultRoute, pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { 
  public appUser = new User();
}
