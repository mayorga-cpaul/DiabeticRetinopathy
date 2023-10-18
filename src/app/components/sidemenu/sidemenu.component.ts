import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { RoleUser } from 'src/app/models/enums/RoleUsers';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  public roleUser?: string | null = ''

  public roles: RoleUser;


  public appPages = [
    { title: 'Inicio', url: 'dashboard', icon: 'home' },
    { title: 'Perfil', url: 'app/profile', icon: 'person' },
    { title: 'Historial médico', url: 'history-dignostic', icon: 'receipt' },
    { title: 'Management Doctors', url: 'ControlDoctors', icon: 'list' }

  ];
  constructor(private router: Router,
    private menuController: MenuController,
    private authService: AuthService) {

  }

  public  ngOnInit() {
    console.log('en sidemenu');
    
    const result = this.authService.IsValid();

    if (result?.islogin) {
      console.log(result);
      
      this.roleUser = result.role;
    }


  }
  Logout() {
    this.HideMenu();
    this.authService.invalidSession();
    this.router.navigateByUrl('login', { replaceUrl: true })
  }
  HideMenu() {
    this.menuController.close('start');
  }


}
