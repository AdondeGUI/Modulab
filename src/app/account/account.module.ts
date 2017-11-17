import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { accountNavComponent } from './account-nav/account-nav.component';
import { accountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        accountNavComponent,
        accountSettingsComponent
    ],
    exports: [
        accountNavComponent,
        accountSettingsComponent
    ]
})

export class accountModule {

}
