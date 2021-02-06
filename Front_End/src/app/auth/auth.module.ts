import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { JobseekerRecordsComponent } from './components/jobseeker-records/jobseeker-records.component';
import { CompanyRecordsComponent } from './components/company-records/company-records.component';
import { JobRecordsComponent } from './components/job-records/job-records.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AddJobsComponent } from './components/add-jobs/add-jobs.component';
import { WelcomeHomeComponent } from './components/welcome-home/welcome-home.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { JobseekerHomeComponent } from './components/jobseeker-home/jobseeker-home.component';
import { CompanyHomeComponent } from './components/company-home/company-home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SharedModule } from '../shared/shared.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { JobseekerProfileComponent } from './components/jobseeker-profile/jobseeker-profile.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { CompanyUpdateProfileComponent } from './components/company-update-profile/company-update-profile.component';
import { JobseekerUpdateProfileComponent } from './components/jobseeker-update-profile/jobseeker-update-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ResumeUploadComponent } from './components/resume-upload/resume-upload.component';
import { CompanyJobOffersComponent } from './components/company-job-offers/company-job-offers.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, AboutUsComponent, JobseekerRecordsComponent, CompanyRecordsComponent, JobRecordsComponent, LogoutComponent, AddJobsComponent, WelcomeHomeComponent, AdminHomeComponent, JobseekerHomeComponent, CompanyHomeComponent, ForgotPasswordComponent, ContactUsComponent, JobseekerProfileComponent, CompanyProfileComponent, CompanyUpdateProfileComponent, JobseekerUpdateProfileComponent, ErrorPageComponent, ResumeUploadComponent, CompanyJobOffersComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [LoginComponent, RegisterComponent, AboutUsComponent, JobseekerRecordsComponent, CompanyRecordsComponent, JobRecordsComponent, LogoutComponent, AddJobsComponent, WelcomeHomeComponent, AdminHomeComponent, JobseekerHomeComponent, CompanyHomeComponent, ForgotPasswordComponent, ContactUsComponent, JobseekerProfileComponent, CompanyProfileComponent, CompanyUpdateProfileComponent, JobseekerUpdateProfileComponent, ErrorPageComponent, ResumeUploadComponent, CompanyJobOffersComponent]
})
export class AuthModule { }
