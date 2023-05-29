/*import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
//import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { LoginModel } from '../shared/loginModel'; // Import the LoginModel interface
import { HttpClient } from '@angular/common/http'; // Import the HttpClient module

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  type: string= "Password";
isText: boolean=false;
eyeIcon: string = "fa-eye-slash";
loginForm!: FormGroup;
constructor(private fb: FormBuilder, private router: Router,private http: HttpClient){

}
login() {
  if (this.loginForm.valid) {
    const usernameControl = this.loginForm.get('username');
    const passwordControl = this.loginForm.get('password');

    if (usernameControl && passwordControl) {
      const loginData: LoginModel = {
        username: usernameControl.value,
        password: passwordControl.value
      };

      // Make a POST request to your API endpoint
      this.http.post('https://localhost:44318/api/Authenticate/login', loginData).subscribe(
        (response) => {
          // Handle the success response from the API
          console.log('Login successful', response);
          this.router.navigate(['/customer-view']);
        },
        (error) => {
          // Handle the error response from the API
          console.error('Login failed', error);
        }
      );
    }
  }
}

ngOnInit(): void{
this.loginForm = this.fb .group({
  Username: ['',[Validators.required, Validators.email]],
  Password: ['',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$')]]

})

}
hideShowPass(){
  this.isText=!this.isText;
  this.isText ? this.eyeIcon= "fa-eye :" : this.eyeIcon="fa-eye-slash";
  this.isText ? this.type="text":this.type="Password";
  }

  onSubmit(){
    if(this.loginForm.valid)
  {
    //send the obj to database
    console.log(this.loginForm.value);

            console.log('hi');
    
    /*const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      const loginModel = new this.LoginModel(username, password);
    this.authService.login(loginModel).subscribe( 
      (response) => {
      // this.storageService.saveUser(response);
      
      // this.roles = this.storageService.getUser().roles;
      console.log("login successful");

      this.router.navigate(['/home']);
    },
    );*/

  /*}
  else{
    //throw the error using toaster and with required field
       console.log("Form is not valid");
  }
    

  }
  private validateAllFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control=formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }
      else if(control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
    })
  }

}*/

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient module
import { LoginModel } from '../shared/loginModel'; // Import the LoginModel interface
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  type: string= "Password";

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient, // Inject the HttpClient service
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const usernameControl = this.loginForm.get('username');
      const passwordControl = this.loginForm.get('password');
  
      if (usernameControl && passwordControl) {
        const loginData: LoginModel = {
          username: usernameControl.value,
          password: passwordControl.value
        };
  
        // Make a POST request to your API endpoint
        this.http.post('https://localhost:44318/api/Authenticate/login', loginData).subscribe(
          (response) => {
            // Handle the success response from the API
            console.log('Login successful', response);
            this.router.navigate(['/product']);
          },
          (error) => {
            // Handle the error response from the API
            console.error('Login failed', error);
          }
        );
      }
    }
  }
}  
