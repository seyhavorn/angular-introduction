import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'intro-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddeNames.bind(this),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
    // this value Changes form for value that change input :
    // NOTE: this.signupForm.valueChanges.subscribe((v) => console.log(v));
    // stateChanges for status chagne in form:
    this.signupForm.statusChanges.subscribe((status) => console.log(status));
    // we can set value with this property: with this property we can only set all value in form
    this.signupForm.setValue({
      userData: {
        username: 'Max',
        email: 'max@gmail.com',
      },
      gender: 'male',
      hobbies: [],
    });
    // this property can set value with path of form:
    this.signupForm.patchValue({
      userData: {
        username: 'Seyha Vorn',
      },
      gender: 'female',
    });
  }

  onSubmit() {
    const data = this.signupForm;
    console.log(data);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getHobbiesControls() {
    const hobbiesFormArray = this.signupForm.get('hobbies');
    if (hobbiesFormArray instanceof FormArray) {
      return hobbiesFormArray.controls;
    }
    return [];
  }

  forbiddeNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return {};
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> | void {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}
