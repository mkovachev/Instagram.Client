import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['']
    });
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm);
  }

  get username() {
    console.log(this.loginForm.get('username'));
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
