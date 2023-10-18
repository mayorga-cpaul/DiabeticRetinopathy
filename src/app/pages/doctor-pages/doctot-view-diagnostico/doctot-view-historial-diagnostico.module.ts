import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctotViewHistorialDiagnosticoPageRoutingModule } from './doctot-view-historial-diagnostico-routing.module';

import { DoctotViewHistorialDiagnosticoPage } from './doctot-view-historial-diagnostico.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctotViewHistorialDiagnosticoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DoctotViewHistorialDiagnosticoPage]
})
export class DoctotViewHistorialDiagnosticoPageModule {}
