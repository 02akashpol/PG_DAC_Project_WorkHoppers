import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-header',
  templateUrl: './welcome-header.component.html',
  styleUrls: ['./welcome-header.component.css']
})
export class WelcomeHeaderComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  login() {

    this.router.navigate(['login']);
  }

  register() {

    this.router.navigate(['register']);
  }

  contactUs() {

    this.router.navigate(['contact-us']);
  }

  aboutUs() {

    this.router.navigate(['about-us']);
  }

  forgotPassword() {

    this.router.navigate(['forgot-password']);
  }
}
