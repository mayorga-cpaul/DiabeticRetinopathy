import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboarPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DashboardPage]
})
export class DashboarPageModule {}
