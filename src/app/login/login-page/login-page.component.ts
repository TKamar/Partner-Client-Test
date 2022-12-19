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
      const usernameValue: String = control.value;
      if (usernameValue.length == 0) {
        return { error: 'Username Is Empty.' };
      }
      if (usernameValue.length > 10) {
        return { error: 'Username length cant be over 10 chars.' };
      }
      if (usernameValue.length < 5) {
        return { error: 'Username Is Empty.' };
      }
      return null;
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
