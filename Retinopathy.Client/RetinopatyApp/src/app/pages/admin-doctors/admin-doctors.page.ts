import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ToastController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components'

@Component({
  selector: 'app-admin-doctors',
  templateUrl: './admin-doctors.page.html',
  styleUrls: ['./admin-doctors.page.scss'],
})
export class AdminDoctorsPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;
  
  
  //#region variables
  public userid: string = '';
  public name: string = '';
  public lastname: string = '';
  public phone: string = '';
  public dni: string = '';
  public email: string = '';
  public fecha: string = '';
  public speciality: string = '';
  public role: string = '';
  public state: string = '';

  lenght = 0;

  public id:string = "present-alert";

  // Array de doctores
  public doctors: Doctor[];

  public array_list = [
    {
      userid: "S1234",
      name: "Saul",
      lastname: "Molina",
      phone: "88496785",
      dni: "1547895",
      email: "saulmolina@gmail.com",
      fecha: "15-09-23",
      speciality: "Oftalmologia",
      role: "Oftalmologo General",
      state: "Disponible"
    }
  ]
  //#endregion

  constructor( private toastController: ToastController) { }

  ngOnInit() {
  }
  
  async AgregarDoctor(){
    // let doctor: Doctor;
    let userid = this.userid;
    let name = this.name;
    let lastname = this.lastname;
    let phone = this.phone;
    let dni = this.dni;
    let email = this.email;
    let fecha = this.fecha;
    let speciality = this.speciality;
    let role = this.role;
    let state = this.state;
  
    try {
      this.array_list.push(
        {
          userid,
          name, 
          lastname, 
          phone, 
          dni, 
          email, 
          fecha,
          speciality, 
          role, 
          state
        })
    } catch (error) {
      console.log(error);
    }
  }
  EditarDoctor(){

  }
  EliminarDoctor(){
    
  }

  LimpiarCampos(){
    document.getElementsByClassName("input_carnet").item.arguments.text = '';
    document.getElementsByClassName("input_name").item.arguments.text = '';
    document.getElementsByClassName("select").item.arguments.text = '';
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
  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
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
//#endregion

}
export class Doctor{
  public carnet: string = '';
  public name: string = '';
  public speciality: string = '';
  public role: string = '';
  public state: string = '';

  public Doctor(){
  }
}