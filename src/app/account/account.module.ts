import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountNavComponent } from './account-nav/account-nav.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        AccountNavComponent,
        AccountSettingsComponent
    ],
    exports: [
        AccountNavComponent,
        AccountSettingsComponent
    ]
})

export class AccountModule {

}
