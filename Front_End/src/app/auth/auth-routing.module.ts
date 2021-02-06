import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddJobsComponent } from './components/add-jobs/add-jobs.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { CompanyHomeComponent } from './components/company-home/company-home.component';
import { CompanyJobOffersComponent } from './components/company-job-offers/company-job-offers.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { CompanyRecordsComponent } from './components/company-records/company-records.component';
import { CompanyUpdateProfileComponent } from './components/company-update-profile/company-update-profile.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { JobRecordsComponent } from './components/job-records/job-records.component';
import { JobseekerHomeComponent } from './components/jobseeker-home/jobseeker-home.component';
import { JobseekerProfileComponent } from './components/jobseeker-profile/jobseeker-profile.component';
import { JobseekerRecordsComponent } from './components/jobseeker-records/jobseeker-records.component';
import { JobseekerUpdateProfileComponent } from './components/jobseeker-update-profile/jobseeker-update-profile.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { ResumeUploadComponent } from './components/resume-upload/resume-upload.component';
import { WelcomeHomeComponent } from './components/welcome-home/welcome-home.component';

const routes: Routes = [
  {path:'admin-home', component:AdminHomeComponent},
  {path:'jobseeker-records', component:JobseekerRecordsComponent},
  {path:'company-records', component:CompanyRecordsComponent},
  {path:'job-records', component:JobRecordsComponent},
  {path:'company-home', component:CompanyHomeComponent},
  {path:'add-jobs', component:AddJobsComponent},
  {path:'company-profile', component:CompanyProfileComponent},
  {path:'company-update-profile', component:CompanyUpdateProfileComponent},
  {path:'error-page', component:ErrorPageComponent},
  {path:'jobseeker-home', component:JobseekerHomeComponent},
  {path:'jobseeker-profile', component:JobseekerProfileComponent},
  {path:'jobseeker-update-profile', component:JobseekerUpdateProfileComponent},
  {path:'logout', component:LogoutComponent},
  {path:'welcome-home', component:WelcomeHomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'company-job-offers', component:CompanyJobOffersComponent},
  {path:'resume-upload', component:ResumeUploadComponent},
  { path: '', redirectTo: '/welcome-home', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
