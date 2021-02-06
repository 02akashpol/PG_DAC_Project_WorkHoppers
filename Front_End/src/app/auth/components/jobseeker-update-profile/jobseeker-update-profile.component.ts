import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jobseeker-update-profile',
  templateUrl: './jobseeker-update-profile.component.html',
  styleUrls: ['./jobseeker-update-profile.component.css']
})
export class JobseekerUpdateProfileComponent implements OnInit {

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

  jobseekerUpdateProfile  : any = [];
  jobseekerProfile: any;

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

      this.fbInput = new FormGroup({
        userId : new FormControl(this.jobseekerProfile.userId),
        userName: new FormControl(this.jobseekerProfile.userName),
        userAddress: new FormControl(this.jobseekerProfile.userAddress),
        userContactNo: new FormControl(this.jobseekerProfile.userContactNo),
        userEmailId: new FormControl(this.jobseekerProfile.userEmailId),
        userPassword: new FormControl(this.jobseekerProfile.userPassword)
      })

    } catch (error) {

      this.router.navigate(['jobseeker-home']);

    }

}

  /*
  public fbInput = this.fb.group({
    userName:['', Validators.required],
    userAddress: ['', Validators.required],
    userContactNo: ['', Validators.required],
    userEmailId: [],
    userPassword: ['', Validators.required]
  });
  */
  /*
  fbInput = new FormGroup({

    userName: new FormControl(''),
    userAddress: new FormControl(''),
    userContactNo: new FormControl(''),
    userEmailId: new FormControl(''),
    userPassword: new FormControl('')
  })
  */



 async jobseekerupdateProfile() {

    try {

      //console.warn(this.fbInput.value);
      //console.warn(this.fbInput.value);

      console.warn(this.fbInput.value);
      const url = 'http://localhost:8080/ProfileUpdate';

      await this.http.put(url, this.fbInput.value, {responseType : 'text' as 'json'}).toPromise();

      //this.jobseekerUpdateProfile = JSON.parse(recvData.toString());

      //console.log(this.jobseekerUpdateProfile);
      //console.log(this.jobseekerUpdateProfile.userId);

      this.router.navigate(['jobseeker-profile']);

    } catch (error) {

      this.router.navigate(['jobseeker-home']);

    }

  }

}
