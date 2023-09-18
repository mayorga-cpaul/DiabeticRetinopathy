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
    { title: 'Perfil', url: 'app/profile', icon: 'person' },
    { title: 'Categorias', url: 'app/categories', icon: 'pricetags' },
    { title: 'Productos', url: 'app/home', icon: 'bag-handle' },
    { title: 'Facturacion', url: 'app/facturation', icon: 'receipt' },
    { title: 'Admin Factura', url: 'app/admin-facturation', icon: 'archive' },
    { title: 'Reportes', url: 'app/reports', icon: 'bar-chart' }
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
