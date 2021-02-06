import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-company-update-profile',
  templateUrl: './company-update-profile.component.html',
  styleUrls: ['./company-update-profile.component.css']
})
export class CompanyUpdateProfileComponent implements OnInit {

  fbInput = new FormGroup({

    userName: new FormControl(''),
    userAddress: new FormControl(''),
    userContactNo: new FormControl(''),
    userEmailId: new FormControl(''),
    userPassword: new FormControl('')
  })

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private router: Router,
    private http: HttpClient,
  ) { }

  companyUpdateProfile  : any = [];
  companyProfile: any;

  async ngOnInit(): Promise<void>{

    if (!sessionStorage.getItem("sid")) {

      this.router.navigate(['welcome-home']);
    }

    //console.warn(sessionStorage.getItem("sid1"));

    try {

      const url = 'http://localhost:8080/ProfileGet/'+sessionStorage.getItem("sid1");

      const recvData = await this.http.get(url, {responseType : 'text' as 'json'}).toPromise();

      this.companyProfile = JSON.parse(recvData.toString());

      this.fbInput = new FormGroup({
        userId : new FormControl(this.companyProfile.userId),
        userName: new FormControl(this.companyProfile.userName),
        userAddress: new FormControl(this.companyProfile.userAddress),
        userContactNo: new FormControl(this.companyProfile.userContactNo),
        userEmailId: new FormControl(this.companyProfile.userEmailId),
        userPassword: new FormControl(this.companyProfile.userPassword)
      })

    } catch (error) {

      this.router.navigate(['company-home']);
    }
}

 async companyupdateProfile() {

    //console.warn(this.fbInput.value);
   //console.warn(this.fbInput.value);

    try {

      console.warn(this.fbInput.value);
      const url = 'http://localhost:8080/ProfileUpdate';

      await this.http.put(url, this.fbInput.value, {responseType : 'text' as 'json'}).toPromise();


      this.router.navigate(['company-profile']);

    } catch (error) {

      this.router.navigate(['company-home']);
    }
  }

}
