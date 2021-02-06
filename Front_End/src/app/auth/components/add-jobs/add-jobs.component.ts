import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.css']
})
export class AddJobsComponent implements OnInit {

  /*
  fbInput = new FormGroup({

    jobTitle : new FormControl(''),
    jobExperience : new FormControl(''),
    jobVacancy : new FormControl(''),
    jobDescription : new FormControl('')

  })
  */
  public alertMessage = false;
  sessionStorage: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) { }

   // jobAddFun : any;

    async ngOnInit(): Promise<void> {

      if (!sessionStorage.getItem("sid")) {

      this.router.navigate(['welcome-home']);
    }

    // public fbInput = this.fb.group({

    //   jobTitle: ['',Validators.required],
    //   jobExperience: ['',Validators.required],
    //   jobVacancy:['',Validators.required],
    //   jobDescription:['',Validators.required],

    // });

  }

  public fbInput = new FormGroup ({
    jobTitle : new FormControl(' ',Validators.required),
    jobExperience : new FormControl(' ',Validators.required),
    jobVacancy : new FormControl(' ',[Validators.required, Validators.pattern("[0-9]")]),
    jobDescription : new FormControl(' ',Validators.required),
    companyId : new FormControl(sessionStorage.getItem("sid1"))

  })

   public sccMsg: any = [];

   async jobAddFun () {

    /*
    this.fbInput = this.fb.group({

      jobTitle : [],
      jobExperience :[],
      jobVacancy : [],
      jobDescription : [],
      companyId : new FormControl(sessionStorage.getItem("sid1"))

    })
    */
    try {

      console.warn(this.fbInput.value);

      const url = 'http://localhost:8080/CompanyJobAdd';

      const recvData = await this.http.post(url, this.fbInput.value, {responseType: 'text' as 'json'}).toPromise();

      this.sccMsg = JSON.parse(recvData.toString());

      this.alertMessage = true;

      this.fbInput.reset();

      document.querySelector("#alertId");

      //document.querySelector("#alertId").innerHTML = "Your inserted data has been submitted successfully.";

      this.router.navigate(['company-job-offers']);

    } catch (error) {

      this.router.navigate(['company-job-offers']);
      //this.router.navigate(['company-home']);
    }
  }

}
