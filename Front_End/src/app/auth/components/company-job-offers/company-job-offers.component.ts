import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-job-offers',
  templateUrl: './company-job-offers.component.html',
  styleUrls: ['./company-job-offers.component.css']
})
export class CompanyJobOffersComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router

  ) { }

  recvJobRecords: any;
  recvRecords: any;
  list : any = [];

  async ngOnInit(): Promise<void> {

    if (!sessionStorage.getItem("sid")) {

      this.router.navigate(['welcome-home']);
    }

    try {

      const url = "http://localhost:8080/CompanyJobOffers/"+sessionStorage.getItem("sid1");

      const recvData = await this.http.get(url, {responseType : 'text' as 'json'}).toPromise();

      this.recvRecords = JSON.parse(recvData.toString());
      console.warn(this.recvRecords);

      for(let i=0;i<this.recvRecords.length;i++){
          //if(this.recvRecords[i].userType == 'jb') {
            if(this.recvRecords[i]) {

            this.list.push(this.recvRecords[i]);
          }
      }

      console.warn(this.list);

    } catch (error) {

      this.router.navigate(['company-home']);
    }
  };

  async deleteJobRecordFun(jobId: number ){

    try {

      const url = "http://localhost:8080/JobDelete/"+jobId;

      console.warn(jobId);
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
      this.router.navigate(['company-job-offers']);

    } catch (error) {

      this.router.navigate(['company-job-offers']);
    }

  }
}
