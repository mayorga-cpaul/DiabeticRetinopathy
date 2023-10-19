import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController, ToastController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components'
import { forkJoin, switchMap } from 'rxjs';
import { IData } from 'src/app/Interfaces/IData';
import { NurseAddFormsComponent } from 'src/app/components/Forms/nurse-add-forms/nurse-add-forms.component';
import { Doctor } from 'src/app/models/Doctor';
import { TypeService } from 'src/app/models/enums/TypeService';
import { UserMinimal } from 'src/app/models/results/UserMininal';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-nourses',
  templateUrl: './admin-nourses.page.html',
  styleUrls: ['./admin-nourses.page.scss'],
})
export class AdminNoursesPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;
  public listNurse: UserMinimal[];

  constructor(private modalController: ModalController, private userService: UserService) {
    userService.GetUserBy<IData<Doctor[]>>(TypeService.ROLE, 'Enfermero')
      .pipe(
        switchMap((results) => {
          const nurseRequests = results.data.map((nurse) => {
            return userService.GetUserBy<UserMinimal>(TypeService.ID, nurse.userId);
          });

          return forkJoin(nurseRequests);
        })
      )
      .subscribe((detailedNurse) => {
        this.listNurse = detailedNurse;
        console.log(this.listNurse);
        
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
  // Refrescar la pagina
  

  
  

  onWillDismiss(event: Event) {
    const eve = event as CustomEvent<OverlayEventDetail<string>>;
    if (eve.detail.role === 'confirm') {
    }
  }

  async AbrirModal(){
    const modal = await this.modalController.create({
      component: NurseAddFormsComponent
    });
    await modal.present();
  }
}
