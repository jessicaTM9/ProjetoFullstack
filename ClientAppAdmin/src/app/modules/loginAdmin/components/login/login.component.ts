import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../services/loginService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  serverResponse: any;
  errorMessage!: string;

  constructor(private fb: FormBuilder, private loginService: LoginServiceService,  private router: Router) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.loginService.login(formData)
  .then(() => {
    this.goToClientList();
  })
  .catch((error) => {
    this.errorMessage = 'Ocorreu um erro ao fazer login. Tente novamente mais tarde.';
    console.error(error);
  });

    }
  }
  goToClientList() {
    this.router.navigate(['/client/:id']);
  }

}

