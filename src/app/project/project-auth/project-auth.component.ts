import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectAuthService } from '../Services/project-auth.service';

@Component({
  selector: 'intro-project-auth',
  templateUrl: './project-auth.component.html',
  styleUrls: ['./project-auth.component.css'],
})
export class ProjectAuthComponent implements OnInit {
  isLoginMode: boolean = true;

  constructor(private projectAuthService: ProjectAuthService) {}

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

    if (this.isLoginMode) {
      this.projectAuthService.signup(email, password).subscribe(
        (resData) => {
          console.log('after sig Up');
        },
        (error) => {
          console.log('error after sigUp', error);
        }
      );
    } else {
      this.projectAuthService.signup(email, password).subscribe(
        (resData) => {
          console.log('after sig Up');
        },
        (error) => {
          console.log('error after sigUp', error);
        }
      );
    }

    form.reset();
  }
}
