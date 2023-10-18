import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HeaderPageComponent } from "./header-page/header-page.component";
import { DoctorListComponent } from "./modals/doctor-list/doctor-list.component";
import { InfoPacientComponent } from "./modals/info-pacient/info-pacient.component";
import { PacientConfigComponent } from "./modals/pacient-config/pacient-config.component";
import { CardAccessComponent } from "./cards/card-access/card-access.component";
import { CardPacientComponent } from "./cards/card-pacient/card-pacient.component";
import { CardDoctorComponent } from "./cards/card-doctor/card-doctor.component";
import { CardNourseComponent } from "./cards/card-nourse/card-nourse.component";
import { DoctorAddFormsComponent } from "./Forms/doctor-add-forms/doctor-add-forms.component";
import { NurseAddFormsComponent } from "./Forms/nurse-add-forms/nurse-add-forms.component";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { PacientDiagnosticCardComponent } from "./cards/pacient-diagnostic-card/pacient-diagnostic-card.component";
import { DiagnosticFormComponent } from "./Forms/diagnostic-form/diagnostic-form.component";

@NgModule({
  declarations: [
    HeaderPageComponent,
    DoctorListComponent,
    InfoPacientComponent,
    PacientConfigComponent,
    CardAccessComponent,
    CardPacientComponent,
    CardDoctorComponent,
    CardNourseComponent,
    DoctorAddFormsComponent,
    NurseAddFormsComponent,
    PacientDiagnosticCardComponent,
    DiagnosticFormComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderPageComponent,
    DoctorListComponent,
    InfoPacientComponent,
    PacientConfigComponent,
    CardAccessComponent,
    CardPacientComponent,
    CardDoctorComponent,
    CardNourseComponent,
    DoctorAddFormsComponent,
    NurseAddFormsComponent,
    PacientDiagnosticCardComponent,
    DiagnosticFormComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule { }