import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctotViewHistorialDiagnosticoPageRoutingModule } from './doctot-view-historial-diagnostico-routing.module';

import { DoctotViewHistorialDiagnosticoPage } from './doctot-view-historial-diagnostico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctotViewHistorialDiagnosticoPageRoutingModule
  ],
  declarations: [DoctotViewHistorialDiagnosticoPage]
})
export class DoctotViewHistorialDiagnosticoPageModule {}
