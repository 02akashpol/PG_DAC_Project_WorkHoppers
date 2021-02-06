import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private router: Router,
    private http: HttpClient,

  ) {}

    companyProfile  : any = [];

    async ngOnInit(): Promise<void>{

      if (!sessionStorage.getItem("sid")) {

        this.router.navigate(['welcome-home']);
      }

      //console.warn(sessionStorage.getItem("sid1"));

      try {

        const url = 'http://localhost:8080/ProfileGet/'+sessionStorage.getItem("sid1");

        const recvData = await this.http.get(url, {responseType : 'text' as 'json'}).toPromise();

        this.companyProfile = JSON.parse(recvData.toString());

      } catch (error) {

        this.router.navigate(['company-home']);
      }

  }

  updateProfile() {

    this.router.navigate(['company-update-profile']);
  }


  async deleteCompanyProfileFun(UserId: number ){

    try {

      const url = "http://localhost:8080/ProfileDelete/"+ UserId;

      console.warn(UserId);
      console.warn(url);

      sessionStorage.removeItem("sid");
      sessionStorage.removeItem("sid1");

      await this.http.delete(url, {responseType: 'text' as 'json'}).toPromise();

      this.router.navigate(['welcome-home']);

    } catch (error) {

      this.router.navigate(['company-home']);
    }

  }

}
