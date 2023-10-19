import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { forkJoin, switchMap } from 'rxjs';
import { IData } from 'src/app/Interfaces/IData';
import { DoctorAddFormsComponent } from 'src/app/components/Forms/doctor-add-forms/doctor-add-forms.component';
import { Doctor } from 'src/app/models/Doctor';
import { TypeService } from 'src/app/models/enums/TypeService';
import { DoctorMInimal } from 'src/app/models/results/DoctorMinimal';
import { UserMinimal } from 'src/app/models/results/UserMininal';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-doctors',
  templateUrl: './admin-doctors.page.html',
  styleUrls: ['./admin-doctors.page.scss'],
})
export class AdminDoctorsPage implements OnInit {
  
  public listDoctors: DoctorMInimal[];

  
  constructor(private modalController: ModalController, private userService: UserService) {
    userService.GetUserBy<IData<Doctor[]>>(TypeService.ROLE, 'Doctor')
      .pipe(
        switchMap((results) => {
          const doctorRequests = results.data.map((doctor) => {
            return userService.GetUserBy<UserMinimal>(TypeService.ID, doctor.userId);
          });

          return forkJoin(doctorRequests);
        })
      )
      .subscribe((detailedDoctors) => {
        this.listDoctors = detailedDoctors;
        console.log(this.listDoctors);
        
      });
  }

  ngOnInit() {
  }

//#region Apartado que no maneja datos
  setResult(ev) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }
  // alerta para cuando decida eliminar
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];
  
//#endregion

  async AbrirModal(){
    const modal = await this.modalController.create({
      component: DoctorAddFormsComponent
    });
    await modal.present();
  }

}