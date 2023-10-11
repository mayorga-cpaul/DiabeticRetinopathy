import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctotViewDetalleDiagnosticoPageRoutingModule } from './doctot-view-detalle-diagnostico-routing.module';

import { DoctotViewDetalleDiagnosticoPage } from './doctot-view-detalle-diagnostico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctotViewDetalleDiagnosticoPageRoutingModule
  ],
  declarations: [DoctotViewDetalleDiagnosticoPage]
})
export class DoctotViewDetalleDiagnosticoPageModule {}
