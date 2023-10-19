import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components'
import { log } from 'console';
import { Role, UserClaim, UserRegister } from 'src/app/models/UserRegister';
import { ManagementService } from 'src/app/services/management.service';

@Component({
  selector: 'app-doctor-add-forms',
  templateUrl: './doctor-add-forms.component.html',
  styleUrls: ['./doctor-add-forms.component.scss'],
})
export class DoctorAddFormsComponent  implements OnInit {

  public name: string = '';
  public lastname: string = '';
  public email: string = '';
  public cedula: string = '';
  public phone: string = '';

  public formuser: FormGroup;
 
  Role: Role = { roleName: ''};
  UserClaim: UserClaim = { claimType: '', claimValue : ''};

  constructor( 
    private toastController: ToastController, 
    private modal: ModalController,
    private ManagementService: ManagementService,
    private formBuilder: FormBuilder
    ) { 

      this.formuser = formBuilder.group({
        name: ['',[Validators.required]],
        email: ['',[Validators.required]],
        dni: ['',[Validators.required]],
        phone: ['',[Validators.required]]
      })
    }

  ngOnInit() {}

//#region 
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
  confirm() {
    this.modal.dismiss(null, 'confirm');
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
  onWillDismiss(event: Event) {
    const eve = event as CustomEvent<OverlayEventDetail<string>>;
    if (eve.detail.role === 'confirm') {
    }
  }
  //#endregion

  AddUser(){
    const DoctorData: UserRegister = {
      userName: this.formuser.get('name')?.value,
      email: this.formuser.get('email')?.value,
      cedula: this.formuser.get('dni')?.value,
      phone: this.formuser.get('phone')?.value,
      password: 'pepito2345',
      roles:{
        roleName: 'Paciente'
      },
      userClaims: {
        claimType: 'Name',
        claimValue: 'Paciente'
      }
    }
   

    console.log('El objeto: ', DoctorData)

    this.ManagementService.AddUser(DoctorData).subscribe({
      next: (response) => {
        console.log('Doctor agregado', response);
        this.presentToast('bottom')
      },
      error: (error) => {
        console.error("Error al agregar: ", error);
        this.presentToast('bottom')
      }
    })
  }
}
