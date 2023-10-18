
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AdminDoctorsPageRoutingModule } from './admin-doctors-routing.module';

import { AdminDoctorsPage } from './admin-doctors.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AdminDoctorsPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDoctorsPageRoutingModule,
    RouterModule,
    ComponentsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AdminDoctorsPageModule {}
