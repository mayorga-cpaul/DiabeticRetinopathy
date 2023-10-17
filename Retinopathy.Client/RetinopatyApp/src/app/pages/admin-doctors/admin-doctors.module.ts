import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDoctorsPageRoutingModule } from './admin-doctors-routing.module';

import { AdminDoctorsPage } from './admin-doctors.page';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

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
