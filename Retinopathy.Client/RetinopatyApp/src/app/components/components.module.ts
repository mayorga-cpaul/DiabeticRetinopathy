import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './header-page/header-page.component';
import { IonicModule } from '@ionic/angular';
import { CardPacientComponent } from './cards/card-pacient/card-pacient.component';
import { CardAccessComponent } from './cards/card-access/card-access.component';
import { DoctorListComponent } from './modals/doctor-list/doctor-list.component';
import { InfoPacientComponent } from './modals/info-pacient/info-pacient.component';
import { CardDoctorComponent } from './cards/card-doctor/card-doctor.component';
import { CardNourseComponent } from './cards/card-nourse/card-nourse.component';
import { PacientConfigComponent } from './modals/pacient-config/pacient-config.component';



@NgModule({
  declarations: [
    HeaderPageComponent,
    CardPacientComponent,
    CardAccessComponent,
    DoctorListComponent,
    InfoPacientComponent,
    CardDoctorComponent,
    CardNourseComponent,
    PacientConfigComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderPageComponent,
    CardPacientComponent,
    CardAccessComponent,
    CardDoctorComponent,
    CardNourseComponent,
    PacientConfigComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
