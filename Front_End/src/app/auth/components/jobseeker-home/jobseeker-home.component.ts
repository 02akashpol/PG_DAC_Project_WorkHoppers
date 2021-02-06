import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobseeker-home',
  templateUrl: './jobseeker-home.component.html',
  styleUrls: ['./jobseeker-home.component.css']
})
export class JobseekerHomeComponent implements OnInit {

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

      const url = "http://localhost:8080/JobRecords";


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

      this.router.navigate(['error-page'])
    }

  };

}


