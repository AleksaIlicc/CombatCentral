import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      experience: ['', Validators.required],
      evidence: [''],
    });

    // Set evidence field validation based on experience
    this.signupForm.get('experience')!.valueChanges.subscribe(value => {
      if (value === 'experienced') {
        this.signupForm.get('evidence')!.setValidators(Validators.required);
      } else {
        this.signupForm.get('evidence')!.clearValidators();
      }
      this.signupForm.get('evidence')!.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    }
  }
}
