import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public alertMessage = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {

  }

  public fbInput = this.fb.group({

    //jobSeekerEmailId: ['', Validators.required],
    //jobSeekerPassword: ['', Validators.required],
    userEmailId: ['', Validators.required],
    userPassword: ['', Validators.required],
  });

  public recvAuthData: any = [];

  ngOnInit(): void {
  }

  async logInFun() {

    const recvInputData = this.fbInput.value;
    console.warn(recvInputData);

    //const url = "http://localhost:8080/JobSeekerValidate";
    const url = "http://localhost:8080/UserValidate";

    try {

      const recvData = await this.http.post(url, recvInputData, {responseType : 'text' as 'json'}).toPromise();

      this.recvAuthData = recvData;

      console.log(recvData);

      //console.log(url);
      //console.warn(recvAuthData.userId);
      //console.warn(this.recvAuthData.length);

      /*
      text/x-json: Experimental(unofficial) MIME type for json before application/json got officially registered :-
      recvData = {"userId":4,"userName":"abc","userPassword":"akashpol","userAddress":"abc","userEmailId":"abc@gmail.com","userContactNo":"123654987","userType":"c"}

      application/json: Official MIME type for json :-
      recvAuthData = [
        {
          "userName" : "Pol Akash",
          "userPassword" : "polakash",
          "userAddress" : "MH",
          "userEmailId" : "pol@gmail.com",
          "userContactNo" : "123456789",
          "userType" : "c"
        }
      ]
      */

      if(recvData != null) {

        let recvAuthData = JSON.parse(recvData.toString());
        console.warn(recvAuthData.userType);

        sessionStorage.setItem('sid', 'true');
        sessionStorage.setItem('sid1', recvAuthData.userId);

        this.fbInput.reset();
        //this.router.navigate(['reset-password']);

        if(recvAuthData.userType == 'a')
          this.router.navigate(['admin-home']);

        else if(recvAuthData.userType == 'j')
          this.router.navigate(['jobseeker-home']);

        else if(recvAuthData.userType == 'c')
          this.router.navigate(['company-home']);

      } else {

        this.alertMessage = true;

        this.fbInput.reset();

        this.router.navigate(['login']);
      }

    } catch {

      this.alertMessage = true;

      this.fbInput.reset();

      this.router.navigate(['login']);
    }

  }

}
