import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  screen: any = 'signin';
  formData: any;
  isLoading: boolean = false;

  constructor(private router:Router, private fb: FormBuilder) { 
    this.formData = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]],
    });
  }

  ngOnInit() {
  }
  change(event:any){
    this.screen = event;
  }
  login(){
    this.router.navigate(['dashboard'],{replaceUrl:true});// omite las validaciones/ puede cambiarse

    var formData: any = new FormData();
    if(this.formData.valid){
      this.isLoading = true
      formData.append('email', this.formData.get('email').value);
      formData.append('password', this.formData.get('password').value);
      console.log(this.formData)
      // this.auth.userLogin(formData).subscribe((data:any)=>{
      //   console.log(data);
      // });
    }  
  }
}
