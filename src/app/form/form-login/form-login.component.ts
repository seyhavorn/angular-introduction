import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Subscription, tap } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'intro-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit, OnDestroy {
  formGroup!: FormGroup;
  subscription!: Subscription;
  data?: any;
  success: string = '';
  error: string = '';
  value: any;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      this.value = {
        username: 'romanblack',
        password: 'password',
      };
    } else {
      this.value = {
        username: this.formGroup.value.username,
        password: this.formGroup.value.password,
      };
    }

    this.subscription = this.loginService
      .login(this.value)
      .pipe(
        tap(
          (data) => {
            this.success = data.message;
          },
          (message) => {
            this.error = message.error.message;
          }
        )
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
