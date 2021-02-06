import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {

    if (!sessionStorage.getItem("sid")) {

      this.router.navigate(['welcome-home']);
    }
  }

}
