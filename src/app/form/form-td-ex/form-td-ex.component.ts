import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'intro-form-td-ex',
  templateUrl: './form-td-ex.component.html',
  styleUrls: ['./form-td-ex.component.css'],
})
export class FormTdExComponent {
  @ViewChild('f') sigupForm!: NgForm;
  defualtSubscriptions = 'advanced';
  submitted = false;
  user = {
    email: '',
    sub: '',
    password: '',
  };

  onSubmit(form: NgForm) {
    this.user.email = this.sigupForm.value.email;
    this.user.sub = this.sigupForm.value.subscriptions;
    this.user.password = this.sigupForm.value.password;
    this.sigupForm.reset();
  }
}
