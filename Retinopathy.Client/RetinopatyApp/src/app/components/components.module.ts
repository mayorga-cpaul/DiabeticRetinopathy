import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './header-page/header-page.component';
import { IonicModule } from '@ionic/angular';
import { CardPacientComponent } from './cards/card-pacient/card-pacient.component';
import { CardAccessComponent } from './cards/card-access/card-access.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';



@NgModule({
  declarations: [
    HeaderPageComponent,
    CardPacientComponent,
    CardAccessComponent,
    DoctorListComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderPageComponent,
    CardPacientComponent,
    CardAccessComponent,
    DoctorListComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
