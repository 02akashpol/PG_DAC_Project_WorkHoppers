import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  jobseekerRecords() {

    this.router.navigate(['jobseeker-records']);
  }

  companyRecords() {

    this.router.navigate(['company-records']);
  }

  jobRecords() {

    this.router.navigate(['job-records']);
  }

  logoutFun () {

    sessionStorage.removeItem('sid');
    sessionStorage.removeItem('sid1');
    this.router.navigate(['welcome-home']);
  }

}
