import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobseeker-header',
  templateUrl: './jobseeker-header.component.html',
  styleUrls: ['./jobseeker-header.component.css']
})
export class JobseekerHeaderComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  profile() {

    this.router.navigate(['jobseeker-profile']);
  }

  resumeUpload() {

    this.router.navigate(['resume-upload']);
  }

  logoutFun () {

    sessionStorage.removeItem('sid');
    sessionStorage.removeItem('sid1');
    this.router.navigate(['welcome-home']);
  }

}
