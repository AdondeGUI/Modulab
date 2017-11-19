import { LabModulesModule } from '../LabModules';
import { AccountModule } from '../account';
import { LoginModule } from '../login';
import { LabDirectoryComponent } from '../lab-directory/lab-directory.component';
import { AccountSettingsComponent } from '../account/account-settings/account-settings.component';
import { LabGeneratorComponent } from '../lab-generator/lab-generator.component';

import { Routes } from "@angular/router";
import { LoginNewComponent } from '../login/login-new/login-new.component';
import { LoginExistingComponent } from '../login/login-existing/login-existing.component';

export const ROUTES : Routes = [
    { path: 'directory', component: LabDirectoryComponent },
    { path: 'settings', component: AccountSettingsComponent },
    { path: 'lab-generator', component: LabGeneratorComponent },
    { path: 'newlogin', component: LoginNewComponent },
    { path: 'login', component: LoginExistingComponent },
    //{ path: '**', redirectTo: '/lab-generator', pathMatch: 'full'}
];
