import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-upload',
  templateUrl: './resume-upload.component.html',
  styleUrls: ['./resume-upload.component.css']
})
export class ResumeUploadComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) { }

  selectedFile: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: any;
  imageName: any;
  imgURL:any;

  ngOnInit(): void {

    if (!sessionStorage.getItem("sid")) {

      this.router.navigate(['welcome-home']);
    }

  }

  public onFileChanged(event : any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  //Gets called when the user clicks on submit to upload the image
  onUpload() {

    try {

      //console.log(this.selectedFile);
      //console.log(this.selectedFile.put("name","pratik"));

      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

      //this.selectedFile.controls['name'].setValue("pratik");
      //this.selectedFile.name = "pratik";
      //console.log(this.selectedFile.name);
      //console.log(uploadImageData);

      //Make a call to the Spring Boot Application to save the image
      this.http.post('http://localhost:8080/image/ResumeUpload', uploadImageData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Your resume has been uploaded successfully.';
          } else {
            this.message = 'There is an error while doing this operation.';
          }
        }
      );

    } catch (error) {

      this.router.navigate(['jobseeker-home']);

    }

  }

    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {

      try {

        //Make a call to Sprinf Boot to get the Image Bytes.
        this.http.get('http://localhost:8080/image/get/' + this.imageName)
        .subscribe(
          res => {
            this.retrieveResonse = res;
            this.base64Data = this.retrieveResonse.picByte;
            this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          }
        );

      } catch (error) {

        this.router.navigate(['jobseeker-home']);

      }

  }

}
