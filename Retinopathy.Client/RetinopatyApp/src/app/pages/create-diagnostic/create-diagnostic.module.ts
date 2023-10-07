import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateDiagnosticPage } from './create-diagnostic.page';
import { HomePageRoutingModule } from './create-diganostic-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CreateDiagnosticPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CreateDiagnosticPageModule { }
