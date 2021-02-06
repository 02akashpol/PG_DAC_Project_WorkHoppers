import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public alertMessage = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  public fbInput = this.fb.group({

    name: ['',Validators.required],
    email: ['',Validators.required],
    description:['',Validators.required],
  });

  public sccMsg: any = [];

  async contactUsFun () {

    console.warn(this.fbInput.value);

    try {

      const url = 'http://localhost:8080/ContactUs';

      const recvData = await this.http.post(url, this.fbInput.value, {responseType: 'text' as 'json'}).toPromise();

      this.sccMsg = recvData;

      this.alertMessage = true;

      this.fbInput.reset();

      document.querySelector("#alertId");

      //document.querySelector("#alertId").innerHTML = "Your inserted data has been submitted successfully.";

    } catch (error) {

      this.router.navigate(['welcome-home']);
    }
  }
}
