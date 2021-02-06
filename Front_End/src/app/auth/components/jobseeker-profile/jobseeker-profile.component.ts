import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jobseeker-profile',
  templateUrl: './jobseeker-profile.component.html',
  styleUrls: ['./jobseeker-profile.component.css']
})
export class JobseekerProfileComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private router: Router,
    private http: HttpClient,

  ) {}

    jobseekerProfile  : any = [];

    async ngOnInit(): Promise<void>{

      if (!sessionStorage.getItem("sid")) {

        this.router.navigate(['welcome-home']);
      }

      try {

        //console.warn(sessionStorage.getItem("sid1"));

        const url = 'http://localhost:8080/ProfileGet/'+sessionStorage.getItem("sid1");

        const recvData = await this.http.get(url, {responseType : 'text' as 'json'}).toPromise();

        this.jobseekerProfile = JSON.parse(recvData.toString());

        //console.log(this.jobseekerProfile);
        //console.log(this.jobseekerProfile.userId);

      } catch (error) {

        this.router.navigate(['jobseeker-home']);
      }

  }

  updateProfile() {

    this.router.navigate(['jobseeker-update-profile']);
  }


  async deleteJobseekerProfileFun(UserId: number ){

    try {

      const url = "http://localhost:8080/ProfileDelete/"+ UserId;

      console.warn(UserId);
      console.warn(url);

      sessionStorage.removeItem("sid");
      sessionStorage.removeItem("sid1");

      await this.http.delete(url, {responseType: 'text' as 'json'}).toPromise();

      this.router.navigate(['welcome-home']);

    } catch (error) {

      this.router.navigate(['welcome-home']);
    }

  }

}
