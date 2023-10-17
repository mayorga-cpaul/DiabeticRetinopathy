import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctotViewDetalleDiagnosticoPage } from './doctot-view-detalle-diagnostico.page';

const routes: Routes = [
  {
    path: '',
    component: DoctotViewDetalleDiagnosticoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctotViewDetalleDiagnosticoPageRoutingModule {}
