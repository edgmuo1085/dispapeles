import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      pass: ['', [Validators.required]],
    });
  }

  onClick() {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      return;
    }

    let email = this.loginForm.controls['email'].value;
    let pass = ''+this.loginForm.controls['pass'].value;

    this.authService.getLogin().subscribe({
      next: response => {
        console.log(response);
        
        if (response.data.email == email && response.data.pass == pass) {
          this.router.navigate(['/dashboard']);
        }
      },
    });
  }
}
