import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobseeker-records',
  templateUrl: './jobseeker-records.component.html',
  styleUrls: ['./jobseeker-records.component.css']
})


export class JobseekerRecordsComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router

  ) { }

  recvJobSeekerRecords: any;
  recvRecords: any;
  list : any = [];


  async ngOnInit(): Promise<void> {

    if (!sessionStorage.getItem("sid")) {

      this.router.navigate(['welcome-home']);
    }

    try {

      const url = "http://localhost:8080/UserRecords";

      const recvData = await this.http.get(url, {responseType : 'text' as 'json'}).toPromise();

      this.recvRecords = JSON.parse(recvData.toString());
      console.warn(this.recvRecords);

      for(let i=0;i<this.recvRecords.length;i++){
          if(this.recvRecords[i].userType == 'j') {

            this.list.push(this.recvRecords[i]);
          }
      }

      console.warn(this.list);

    } catch (error) {

      this.router.navigate(['admin-home'])
    }

  };


  async deleteJobseekerRecordFun(jobSeekerId: number ){

    try {

      const url = "http://localhost:8080/UserDelete/"+ jobSeekerId;

      console.warn(jobSeekerId);
      console.warn(url);

      await this.http.delete(url).toPromise();

      /*
      for(let i=0;i< this.recvJobRecords.length;++i)
      {
        if (this.recvJobRecords[i].jobSeekerId === jobSeekerId){
          this.recvJobRecords(i,1);
        }
      }
      */
      this.router.navigate(['jobseeker-records']);

    } catch (error) {

      this.router.navigate(['admin-home'])

    }

  }

}
