import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorViewHistorialAnalisisPage } from './doctor-view-historial-analisis.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorViewHistorialAnalisisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorViewHistorialAnalisisPageRoutingModule {}
