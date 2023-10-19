import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { UserRegister } from 'src/app/models/UserRegister';
import { ManagementService } from 'src/app/services/management.service';
import { OverlayEventDetail } from '@ionic/core/components'
@Component({
  selector: 'app-nurse-add-forms',
  templateUrl: './nurse-add-forms.component.html',
  styleUrls: ['./nurse-add-forms.component.scss'],
})
export class NurseAddFormsComponent implements OnInit {

  public formNurse: FormGroup;


  constructor(
    private toastController: ToastController,
    private modal: ModalController,
    private ManagementService: ManagementService,
    private formBuilder: FormBuilder) { 

      this.formNurse = formBuilder.group({
        name: ['',[Validators.required]],
        email: ['',[Validators.required]],
        dni: ['',[Validators.required]],
        phone: ['',[Validators.required]]
      })
    }

  ngOnInit() { }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
  confirm() {
    this.modal.dismiss(null, 'confirm');
  }
  // Para confirmar
  public async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Completed',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  public AddUser() {
    const NurseData: UserRegister = {
      userName: this.formNurse.get('name')?.value,
      email: this.formNurse.get('email')?.value,
      cedula: this.formNurse.get('dni')?.value,
      phone: this.formNurse.get('phone')?.value,
      password: 'pepito2345',
      roles: [{
        roleName: 'Enfermero'
      }],
      userClaims: [{
        claimType: 'Name',
        claimValue: 'Enfermero'
      }]
    }


    console.log('El objeto: ', NurseData)

    this.ManagementService.AddUser(NurseData).subscribe({
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

  onWillDismiss(event: Event) {
    const eve = event as CustomEvent<OverlayEventDetail<string>>;
    if (eve.detail.role === 'confirm') {
    }
  }
}
