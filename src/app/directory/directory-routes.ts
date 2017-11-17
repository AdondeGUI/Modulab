import { LabModulesModule } from '../LabModules';
import { AccountModule } from '../account';
import { LoginModule } from '../login';
import { LabDirectoryComponent } from '../lab-directory/lab-directory.component';
import { AccountSettingsComponent } from '../account/account-settings/account-settings.component';

import { Routes } from "@angular/router";

export const DIRECTORY_ROUTES : Routes = [
    { path: 'directory', component: LabDirectoryComponent },
    { path: 'settings', component: AccountSettingsComponent }
];