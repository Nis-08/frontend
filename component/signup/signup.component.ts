import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from '../shared/registerModel';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup .component.css']
})
export class SignupComponent {
  registerForm: FormGroup;
  type: string= "Password";

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  register() {
    if (this.registerForm.valid) {
      const usernameControl = this.registerForm.get('username');
      const emailControl = this.registerForm.get('email');
      const passwordControl = this.registerForm.get('password');

      if (usernameControl && emailControl && passwordControl) {
        const registerData: RegisterModel = {
          username: usernameControl.value,
          email: emailControl.value,
          password: passwordControl.value
        };

        // Make a POST request to your API endpoint
        this.http.post('https://localhost:44318/api/Authenticate/register-admin', registerData).subscribe(
          (response) => {
            // Handle the success response from the API
            console.log('Registration successful', response);
            // Optionally, you can redirect to a success page or perform any other actions
          },
          (error) => {
            // Handle the error response from the API
            console.error('Registration failed', error);
            // Optionally, you can display an error message to the user or perform any other error handling
          }
        );
      }
    }
  }
}
