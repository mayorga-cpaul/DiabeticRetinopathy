import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListResultsPageRoutingModule } from './list-results-routing.module';

import { ListResultsPage } from './list-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListResultsPageRoutingModule
  ],
  declarations: [ListResultsPage]
})
export class ListResultsPageModule {}
