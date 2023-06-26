import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  AuthResponseData,
  ProjectAuthService,
} from '../Services/project-auth.service';

@Component({
  selector: 'intro-project-auth',
  templateUrl: './project-auth.component.html',
  styleUrls: ['./project-auth.component.css'],
})
export class ProjectAuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = '';

  constructor(
    private projectAuthService: ProjectAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSwtichMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;

    if (this.isLoginMode) {
      this.isLoginMode = true;
      authObs = this.projectAuthService.login(email, password);
    } else {
      authObs = this.projectAuthService.signup(email, password);
    }

    authObs.subscribe(
      (resData) => {
        console.log('data successfully', resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        console.log('message that error when do action', errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    form.reset();
  }
}
