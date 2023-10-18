import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboar',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  roleUser?: string = ''
  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit() {
    const result = this.authService.IsValid();

    if (result?.islogin) {
      console.log(result);
      
      this.roleUser = result.role;
    }
  }

  onClick(url: string){
    this.router.navigate([url]);
  }
}
