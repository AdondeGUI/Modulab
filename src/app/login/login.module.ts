import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { loginExistingComponent } from './login-existing/login-existing.component';
import { loginNewComponent } from './login-new/login-new.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [

        loginExistingComponent,
        loginNewComponent
    ],
    exports: [
        loginExistingComponent,
        loginNewComponent
    ]
})
export class LoginModule {

}
