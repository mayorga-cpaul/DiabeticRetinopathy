import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './header-page/header-page.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderPageComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderPageComponent,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
