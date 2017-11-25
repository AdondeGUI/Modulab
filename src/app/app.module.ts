import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { User, DomainModule } from './domain'
import { LabModulesModule } from './LabModules/LabModules.module'
import { DirectoryModule } from './routing';
import { UserManager } from './user-manager.service';
import { AuthGuard } from './auth-guard.service';

const defaultRoute = 'landing-page';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DirectoryModule,
    LabModulesModule,
    DomainModule,
    RouterModule.forRoot([
      { path: '', redirectTo: defaultRoute, pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    UserManager,
    AuthGuard
  ]
})

export class AppModule { 
  public appUser = new User();
}
