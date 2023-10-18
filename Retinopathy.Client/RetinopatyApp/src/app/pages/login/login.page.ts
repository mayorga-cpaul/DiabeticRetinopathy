import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/UserLogin';
import { AuthenticatedUser } from 'src/app/models/auth/AuthenticatedUser';
import { LocalStorageRepository } from 'src/app/repository/LocalStorageRepository';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  screen: any = 'signin';
  formLogin: FormGroup;

  constructor(
    private router: Router, private fb: FormBuilder,
    private authService: AuthService,
    private repoLocalStorage: LocalStorageRepository) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });


  }

  ngOnInit() {
  }
  public change(event: any) {
    this.screen = event;
  }
  public login() {

    if (this.formLogin.valid === true) {
      const userLoginData: UserLogin = {
        email: this.formLogin.get('email').value,
        password: this.formLogin.get('password').value
      }

      if (userLoginData != undefined || userLoginData != null) {

        this.authService.AuthUser(userLoginData).subscribe({
          next: (response: AuthenticatedUser) => {  
            
            this.router.navigate(['dashboard'], { replaceUrl: true });
          },
          error(errorMessage: string) {
            if (errorMessage) {
              Swal.fire({
                icon: 'error',
                title: errorMessage,
                heightAuto: false,
                didClose: () => {

                },
              });
            }
          },
        })
      }
    }
  }
}
