import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-records',
  templateUrl: './company-records.component.html',
  styleUrls: ['./company-records.component.css']
})
export class CompanyRecordsComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) { }

  recvCompanyRecords: any;
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
            if(this.recvRecords[i].userType == 'c') {

              this.list.push(this.recvRecords[i]);
            }
        }

        console.warn(this.list);

      } catch (error) {

        this.router.navigate(['company-home']);
      }

    };


    async deleteJobseekerRecordFun(companyId: number ){

      try {

        const url = "http://localhost:8080/UserDelete/"+ companyId;

        console.warn(companyId);
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
        this.router.navigate(['company-records']);

      } catch (error) {

        this.router.navigate(['company-home']);
      }

    }
}
