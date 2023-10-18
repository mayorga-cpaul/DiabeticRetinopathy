import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorViewPageRoutingModule } from './doctor-view-routing.module';

import { DoctorViewPage } from './doctor-view.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorViewPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DoctorViewPage]
})
export class DoctorViewPageModule {}
