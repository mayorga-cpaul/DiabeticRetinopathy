import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorPageRoutingModule } from './doctor-routing.module';

import { DoctorPage } from './doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [DoctorPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DoctorPageModule {}
