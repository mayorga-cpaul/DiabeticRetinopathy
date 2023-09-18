import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorsListPageRoutingModule } from './doctors-list-routing.module';

import { DoctorsListPage } from './doctors-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorsListPageRoutingModule
  ],
  declarations: [DoctorsListPage]
})
export class DoctorsListPageModule {}
