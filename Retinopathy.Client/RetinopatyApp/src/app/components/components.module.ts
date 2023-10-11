import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './header-page/header-page.component';
import { IonicModule } from '@ionic/angular';
import { CardDoctorComponent } from './card-doctor/card-doctor.component';
import { CardNourseComponent } from './card-nourse/card-nourse.component';



@NgModule({
  declarations: [
    HeaderPageComponent,
    CardDoctorComponent,
    CardNourseComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderPageComponent,
    CardDoctorComponent,
    CardNourseComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
