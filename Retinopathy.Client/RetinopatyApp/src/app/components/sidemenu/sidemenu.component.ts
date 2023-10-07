import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  public appPages = [
    { title: 'Inicio', url: 'dashboard', icon: 'home' },
    { title: 'Perfil', url: 'app/profile', icon: 'person' },
    { title: 'Historial médico', url:'history-dignostic',icon: 'receipt'},
    { title: 'Management Doctors', url: 'platform-doctors', icon: 'list'}
   
  ];
  constructor(private router: Router,
    private menuController: MenuController) {
      
  }

  ngOnInit() { }
  Logout() {
    this.HideMenu();
    this.router.navigateByUrl('login', { replaceUrl: true })
  }
  HideMenu() {
    this.menuController.close('start');
  }
}
