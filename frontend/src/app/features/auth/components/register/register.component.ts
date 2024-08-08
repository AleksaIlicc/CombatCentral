import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegisterForm } from '../../interfaces/auth.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const user : RegisterForm = this.signupForm.value;
    this.authService.register(user).subscribe({
      next: response => {
        console.log(response);
        this.router.navigateByUrl('/auth/login');
      },
      error: error => {
        console.log(error);
      },
    });
  }
}
