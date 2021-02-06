import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-header',
  templateUrl: './company-header.component.html',
  styleUrls: ['./company-header.component.css']
})
export class CompanyHeaderComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  myJobOffers() {

    this.router.navigate(['company-job-offers']);
  }

  addJobs() {

    this.router.navigate(['add-jobs']);
  }

  companyProfile() {

    this.router.navigate(['company-profile']);
  }

  logoutFun () {

    sessionStorage.removeItem('sid');
    sessionStorage.removeItem('sid1');
    this.router.navigate(['welcome-home']);
  }

}
