import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'intro-reactive-form-ex',
  templateUrl: './reactive-form-ex.component.html',
  styleUrls: ['./reactive-form-ex.component.css'],
})
export class ReactiveFormExComponent implements OnInit {
  signupForm!: FormGroup;
  defualtStatus: string = 'critical';
  forbiddenUsernames: string = 'Test';

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        this.forbiddeNames.bind(this),
      ]),
      email: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    const form = this.signupForm.value;
    console.log('form', form);

    setTimeout(() => {
      this.signupForm.reset();
    }, 1000);
  }

  forbiddeNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return {};
  }
}
