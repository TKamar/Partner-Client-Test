import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) {
    this.loginForm = this.fb.group({});
    this.buildForm();
  }

  private buildForm(): void {

    const usernameValidation: ValidatorFn = (control: AbstractControl) => {
      const usernameValue: string = control.value;
      const regexChars = RegExp("^[a-zA-Z\-\u0590-\u05FF ]+$");
      if (usernameValue.length == 0) {
        return { error: 'שם המשתמש אינו יכול להיות ריק.' };
      }
      if (usernameValue.length > 10) {
        return { error: 'על שם המשתמש להיות עד 10 תווים.' };
      }
      if (usernameValue.length < 5) {
        return { error: 'על שם המשתמש להכיל לפחות 5 תווים.' };
      }
      if (!regexChars.test(usernameValue)) {
        return { error: 'על שם המשתמש להכיל תווים בעברית ובאנגלית בלבד.' };
      }
      else return null;
    }

    this.loginForm = this.fb.group({
      userName: ['', [usernameValidation]]
    });

  };


  public next(): void {
    if (this.loginForm.invalid)
      return;

    this.usersService.login(this.loginForm.value.userName);
    this.router.navigate(['./packages']);
  }

  ngOnInit(): void {
  }

}
