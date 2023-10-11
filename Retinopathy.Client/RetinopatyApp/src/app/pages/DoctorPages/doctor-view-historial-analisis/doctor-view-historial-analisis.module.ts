import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorViewHistorialAnalisisPageRoutingModule } from './doctor-view-historial-analisis-routing.module';

import { DoctorViewHistorialAnalisisPage } from './doctor-view-historial-analisis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorViewHistorialAnalisisPageRoutingModule
  ],
  declarations: [DoctorViewHistorialAnalisisPage]
})
export class DoctorViewHistorialAnalisisPageModule {}
