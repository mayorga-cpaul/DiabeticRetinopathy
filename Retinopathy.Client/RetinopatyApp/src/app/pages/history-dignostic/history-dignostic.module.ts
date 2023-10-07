import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryDignosticPageRoutingModule } from './history-dignostic-routing.module';

import { HistoryDignosticPage } from './history-dignostic.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryDignosticPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HistoryDignosticPage]
})
export class HistoryDignosticPageModule {}
