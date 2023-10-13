import { Component } from '@angular/core';
import { DoctorViewPage } from './pages/DoctorPages/doctor-view_historial/doctor-view.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  component = DoctorViewPage;

  constructor() {}
}
