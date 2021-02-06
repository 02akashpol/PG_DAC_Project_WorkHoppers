import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeHeaderComponent } from './components/welcome-header/welcome-header.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { JobseekerHeaderComponent } from './components/jobseeker-header/jobseeker-header.component';
import { CompanyHeaderComponent } from './components/company-header/company-header.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [WelcomeHeaderComponent, AdminHeaderComponent, JobseekerHeaderComponent, CompanyHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [WelcomeHeaderComponent, AdminHeaderComponent, JobseekerHeaderComponent, CompanyHeaderComponent]
})
export class SharedModule { }
