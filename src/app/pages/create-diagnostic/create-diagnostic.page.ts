import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RetinopatyService } from 'src/app/services/retinopaty.service';
import { DoctorListComponent } from 'src/app/components/modals/doctor-list/doctor-list.component';
import { InfoPacientComponent } from 'src/app/components/modals/info-pacient/info-pacient.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DiagnosticService } from 'src/app/services/diagnostic.service';
import { Diagnostic } from 'src/app/models/Diagnostic';
@Component({
  selector: 'app-home',
  templateUrl: 'create-diagnostic.page.html',
  styleUrls: ['create-diagnostic.page.scss'],
})
export class CreateDiagnosticPage implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;
  public imageSelect: string | ArrayBuffer | null = null;
  public doctor: string = '';
  public IsLoadImage: FormGroup;
  public FormPacient: FormGroup;
  public PacientExist: boolean = true;
  public ViewInfo: boolean = false;
  private file: File;
  public screen: any = 'load-image';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private rtService: RetinopatyService,
    private frbs: FirebaseService,
    private serviceDiagnositc: DiagnosticService) {

    this.IsLoadImage = this.formBuilder.group({
      image: [null, Validators.required],
    });

    this.FormPacient = this.formBuilder.group({
      dni: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(15)]],
      name: ['', [Validators.required]]
    });

    console.log('Estado', this.FormPacient.valid);

  }

  ngOnInit(): void {
    this.serviceDiagnositc.getActiveUser();
  }
  private _processMessage(): void {
    Swal.fire({
      title: 'Procesando...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      heightAuto: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  public processImage(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files[0]) {
      this.file = inputElement.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSelect = e.target?.result;
      };
      reader.readAsDataURL(inputElement.files[0]);
    }
  }

  public async addDoctor() {
    const modal = this.modalController.create({
      component: DoctorListComponent,
    });
    (await modal).present();
    (await modal).onDidDismiss().then((result) => {
      const info = result.data;
      if (info !== undefined) {
        this.doctor = info.Name
      }
    });
  }

  public thisPacientExist() {
    
    if (this.FormPacient.get('dni').valid == true) {
      if (this.GetPacient()) {
        this.PacientExist = true;
        this.ViewInfo = true;
        this.showAlert('El paciente ya existe');

      } else {
        this.showAlert('El paciente no existe');
        this.PacientExist = false;
        this.ViewInfo = false;
      }

    } else {
      this.showAlert('El numero de cedula no esta completo');

    }
  }


  public async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: message,
      buttons: ['Aceptar'],
    });

    await alert.present();

  }

  public GetPacient(): boolean {
    const randomValue = Math.random();
    const threshold = 0.5;
    return randomValue > threshold;
  }

  public async processData() {
    let testResults = '';
    this._processMessage();
    this.rtService.uploadImage(this.file).subscribe(   
      {
        next: (response) => {
          testResults = response;

          
          console.log(testResults);
          
        },
        error: (error) => {
          console.error('Error al enviar el archivo', error);
        },
       complete: () =>{
        let namePacient = this.FormPacient.get('name').value;
        this.frbs.uploadImage(this.file,namePacient).subscribe({
          next: (url) => {

            const diagnostic: Diagnostic = {
              imageSource: url,

            }
            console.log('link imagen',url);
            console.log(testResults);
            Swal.close();
            Swal.fire({
              icon: 'success',
              title: 'Informacion subida correctamente',
              heightAuto: false,
              didClose: () => {
                this.returnDashboad();
              },
            });
          },
          error(err) {
              console.log(err);
          },
         
        })
       }
      });
    
    // await this.viewResults();
  }
  public step(event:any){
    this.screen = event;
  
  }

  public async viewResults(){
    const modal = await this.modalController.create({
      component: InfoPacientComponent,
      componentProps:{
        pacientObject: {}
      }
    });
    await modal.present(); 
  }

  returnDashboad(){
    this.router.navigate(['dashboard'],{replaceUrl:true})
  }
}
