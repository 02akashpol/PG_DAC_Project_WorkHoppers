import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) { }

  public fbInput = this.fb.group({

    userEmailId : [''],


  });

  public sccMsg : any = [];

  ngOnInit(): void {
  }
  async forgotPassFun (){

    try {

      console.warn(this.fbInput.controls['userEmailId'].value);

      const url = "http://localhost:8080/ForgotPassword/"+ this.fbInput.controls['userEmailId'].value;

      console.warn(url);

      const recvData = await this.http.get(url, {responseType: 'text' as 'json'}).toPromise();

      this.sccMsg = recvData;

      console.log(this.sccMsg);

      this.fbInput.reset();

    } catch (error) {

      this.fbInput.reset();
      this.router.navigate(['welcome-home']);
    }

  }

}
