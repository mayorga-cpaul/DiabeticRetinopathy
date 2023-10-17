import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctotViewHistorialDiagnosticoPage } from './doctot-view-historial-diagnostico.page';

const routes: Routes = [
  {
    path: '',
    component: DoctotViewHistorialDiagnosticoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctotViewHistorialDiagnosticoPageRoutingModule {}
