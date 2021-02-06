import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public alertMessage = false;

  constructor(

    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient

  ) {

  }

  public fbInput= this.fb.group({

  userType:['', Validators.required],
  userName:['', Validators.required],
  userAddress: ['', Validators.required],
  userEmailId: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
  userContactNo: ['', Validators.required],
  userPassword: ['', [Validators.required, Validators.pattern("[A-Za-z0-9_]{5,15}")]]

  });

  //public recvInptData: any = this.fbInput.value;

  public sccMsg : any = [];

  //public errMsg: any = [{message : 'Both the passwords should be same'}];

  ngOnInit(): void {}

  async registerFun() {

    try {

      console.log(this.fbInput.value);

      const url = 'http://localhost:8080/UserAdd';

      if(this.fbInput.value.password === this.fbInput.value.confirm_password) {

        const recvData = await this.http.post(url, this.fbInput.value, {responseType: 'text' as 'json' }).toPromise();

        this.sccMsg = recvData;

        this.alertMessage = true;

        console.log(this.sccMsg);

        //document.querySelector("#alertId").innerHTML = this.sccMsg.message;
        //document.getElementById("#alertId").innerHTML = "asops ";

        console.log(this.sccMsg.message);

        this.fbInput.reset();

      } else {

        //console.log(this.errMsg.message);

        this.fbInput.reset();
      }

      //this.fbInput.reset();

    } catch (error) {

      this.router.navigate(['welcome-home']);
    }

  }

}
