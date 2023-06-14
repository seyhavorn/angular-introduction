import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingEditComponent } from '../../project/shopping-list/shopping-edit/shopping-edit.component';

@Component({
  selector: 'intro-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @ViewChild('f') sigupForm!: NgForm;
  defualtQuestion = 'pet';
  answer: string = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // set value of whole of form:
    // this.sigupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: '',
    //   questionAnswer: '',
    //   gender: 'male',
    // });
    // set new value with override path of form
    this.sigupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.user.username = this.sigupForm.value.userData.username;
    this.user.email = this.sigupForm.value.userData.email;
    this.user.secretQuestion = this.sigupForm.value.secret;
    this.user.answer = this.sigupForm.value.questionAnswer;
    this.user.gender = this.sigupForm.value.gender;
    // reset value in form to null:
    this.sigupForm.reset();
  }
}
