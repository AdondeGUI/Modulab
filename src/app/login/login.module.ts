import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginExistingComponent } from './login-existing/login-existing.component';
import { LoginNewComponent } from './login-new/login-new.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DomainModule, UserRepository } from "../domain"


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        DomainModule,
        HttpClientModule
    ],
    declarations: [
        LoginExistingComponent,
        LoginNewComponent
    ],
    exports: [
        LoginExistingComponent,
        LoginNewComponent
    ]
    
})
export class LoginModule {

}
