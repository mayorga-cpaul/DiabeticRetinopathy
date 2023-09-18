import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ResultsPageRoutingModule } from './results-routing.module';
import { ResultsPage } from './results.page';
import {NgApexchartsModule} from 'ng-apexcharts'
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultsPageRoutingModule,
    NgApexchartsModule,
    ComponentsModule
  ],
  declarations: [ResultsPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ResultsPageModule {}
