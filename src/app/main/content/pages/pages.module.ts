import { NgModule } from '@angular/core';

import { LoginModule } from './authentication/login/login.module';
import { RegisterModule } from './authentication/register/register.module';
import { Register2Module } from './authentication/register-2/register-2.module';
import { ForgotPasswordModule } from './authentication/forgot-password/forgot-password.module';
import { ResetPasswordModule } from './authentication/reset-password/reset-password.module';
import { ResetPassword2Module } from './authentication/reset-password-2/reset-password-2.module';
import { LockModule } from './authentication/lock/lock.module';
import { MailConfirmModule } from './authentication/mail-confirm/mail-confirm.module';
import { MaintenanceModule } from './maintenance/maintenence.module';
import { ProfileModule } from './profile/profile.module';
import { SearchModule } from './search/search.module';

@NgModule({
    imports: [
        // Auth
        LoginModule,
        RegisterModule,
        Register2Module,
        ForgotPasswordModule,
        ResetPasswordModule,
        ResetPassword2Module,
        LockModule,
        MailConfirmModule,

        // Maintenance
        MaintenanceModule,

        // Profile
        ProfileModule,

        // Search
        SearchModule,
        
    ]
})
export class ElisaPagesModule
{

}
