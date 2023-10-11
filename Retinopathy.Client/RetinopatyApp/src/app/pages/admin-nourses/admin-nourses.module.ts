import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminNoursesPageRoutingModule } from './admin-nourses-routing.module';

import { AdminNoursesPage } from './admin-nourses.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminNoursesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdminNoursesPage]
})
export class AdminNoursesPageModule {}
