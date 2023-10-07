import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonModal, ToastController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components'

@Component({
  selector: 'app-admin-doctors',
  templateUrl: './admin-doctors.page.html',
  styleUrls: ['./admin-doctors.page.scss'],
})
export class AdminDoctorsPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;

  //scroll
  // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  
  // variables
  public carnet: string = '';
  public name: string = '';
  public speciality: string = '';
  public role: string = '';
  public state: string = '';

  // Array de doctores
  public doctors_list = [
    {
      carnet: 'D1234',
      name: 'Juancito perez',
      speciality: 'ophthalmologist',
      role: 'Supervisor',
      state: 'Disponible'
    },
    {
      carnet: 'D1235',
      name: 'Pepito Gutierrez',
      speciality: 'ophthalmologist',
      role: 'Asigned',
      state: 'Disponible'
    },
    {
      carnet: 'D1236',
      name: 'Gabriela Lopez',
      speciality: 'ophthalmologist',
      role: 'Asigned',
      state: 'No Disponible'
    },
    {
      carnet: 'D1237',
      name: 'Eliseo Torrez',
      speciality: 'ophthalmologist',
      role: 'No asigned',
      state: 'Disponible'
    }
  ]

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

  setResult(ev) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

  constructor( private toastController: ToastController) { }

  ngOnInit() {
  }

  // modal para agregar empleado
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const eve = event as CustomEvent<OverlayEventDetail<string>>;
    if (eve.detail.role === 'confirm') {
    }
  }

  // Para confirmar
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Completed',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  // scroll

  // loadData(event){
  //   setTimeout(() => {
  //     console.log('Done');
  //     event.target.complete();

  //     if(DataTransfer.length == 1000){
  //       event.target.disabled = true;
  //     }
  //   }, 500);
  // }

  // toggleInfiniteScroll(){
  //   this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  // }

}
