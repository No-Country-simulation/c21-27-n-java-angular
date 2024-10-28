import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ObButtonCircleComponent } from '../../shared/components/ob-button-circle/ob-button-circle.component';
import { LoginService } from './service/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ObButtonCircleComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private ls = inject(LoginService);

  formLogin: FormGroup;
  isOpen = signal<boolean>(false);
  iconPassword = signal<string>('icon-[solar--lock-password-bold-duotone]');
  isLoading = signal<boolean>(false);

  constructor() {
    this.formLogin = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  usernameError() {
    const usernameControl = this.formLogin.get('username');
    return (
      usernameControl && usernameControl.touched && usernameControl.invalid
    );
  }

  passwordError() {
    const usernameControl = this.formLogin.get('password');
    return (
      usernameControl && usernameControl.touched && usernameControl.invalid
    );
  }

  public onLogin() {
    if (this.formLogin.valid) {
      this.ls.login(this.formLogin.value);
    } else {
      alert('Form invalid');
    }
  }

  togglePass() {
    this.isOpen.update((prev) => !prev);
    this.iconPassword.set(
      this.isOpen()
        ? 'icon-[solar--lock-password-unlocked-bold-duotone]'
        : 'icon-[solar--lock-password-bold-duotone]'
    );
  }

  ngOnInit(): void {
    this.ls.isLoading().subscribe((loading) => {
      this.isLoading.set(loading);
    });
  }
}
