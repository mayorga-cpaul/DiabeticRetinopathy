import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() url: string = '';
  

  istrue = true;
  public appPages = [
    { title: 'Inicio', url: 'dashboard', icon: 'home' },
    { title: 'Perfil', url: 'app/profile', icon: 'person' },
    { title: 'Historial médico', url:'history-dignostic',icon: 'receipt'},
    { title: 'Doctors', url: 'ControlDoctors', icon: 'fitness'},
    { title: 'Nurses', url: 'admin-nurses', icon: 'medical'},
    { title: 'Pacients', url: 'doctor-view', icon: 'people'},
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
