import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
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
import { PredictionResult } from 'src/app/models/results/PredictionResult';
import { LocalStorageRepository } from 'src/app/repository/LocalStorageRepository';
import { MetadataUser } from 'src/app/models/auth/MetadataUser';
import { DoctorMInimal } from 'src/app/models/results/DoctorMinimal';
import { UserService } from 'src/app/services/user.service';
import { TypeService } from 'src/app/models/enums/TypeService';
import { UserMinimal } from 'src/app/models/results/UserMininal';
import { Observable, map } from 'rxjs';
import { DiagnosticPacientExist } from 'src/app/models/DiagnosticPacientExist';
import { MessengerService } from 'src/app/services/messenger.service';
import { UserCredentials } from 'src/app/models/UserCredentials';
@Component({
  selector: 'app-home',
  templateUrl: 'create-diagnostic.page.html',
  styleUrls: ['create-diagnostic.page.scss'],
})
export class CreateDiagnosticPage implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;

  public imageSelect: string | ArrayBuffer | null = null;
  public doctor?: DoctorMInimal;
  public user?: UserMinimal;
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
    private serviceDiagnositc: DiagnosticService,
    private localStoreRepository: LocalStorageRepository,
    private userServices: UserService) {

    this.IsLoadImage = this.formBuilder.group({
      image: [null, Validators.required],
    });

    this.FormPacient = this.formBuilder.group({
      dni: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(17)]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
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
    (await modal).onDidDismiss<DoctorMInimal>().then((result) => {
      const info = result.data;
      if (info !== undefined) {
        this.doctor = info;
      }
    });
  }

  public thisPacientExist() {
    let diagnostic: Diagnostic = new Diagnostic();

    if (this.FormPacient.get('dni').valid == true) {
      this.GetPacient(this.FormPacient.get('dni').value).subscribe({
        next: (result) => {
          if (result != null || result != undefined) {
            this.PacientExist = true;
            this.ViewInfo = true;
            this.showAlert('El paciente ya existe');
            this.user = result;
  
          }
        },
        error: (err) => {
          this.showAlert('El paciente no existe');
          this.PacientExist = false;
          this.ViewInfo = false;
        },
      })
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

  public GetPacient(value: string): Observable<UserMinimal | null> {
    return this.userServices.GetUserBy<UserMinimal>(TypeService.DNI, value)
      .pipe(
        map((result) => {
          return result !== undefined && result !== null ? result : null;
        })
      );
  }



  public async processData() {
    let diagnostic: Diagnostic = new Diagnostic();
    let diagnosticUserExist: DiagnosticPacientExist = new DiagnosticPacientExist();
    this._processMessage();

    this.rtService.uploadImage(this.file).subscribe(
      {
        next: (response: PredictionResult) => {

          if (this.user?.userId !== undefined && this.user.userId !== 0) {
            diagnosticUserExist.nurseId = 13;
            diagnosticUserExist.patientId = this.user.userId;
            diagnosticUserExist.doctorId = this.doctor?.userId;
            diagnosticUserExist.mild = response.result.mild;
            diagnosticUserExist.noDiabeticRetinopathy = response.result.no_dir
            diagnosticUserExist.severe = response.result.sever;
            diagnosticUserExist.moderate = response.result.moderate;
            diagnosticUserExist.proliferative = response.result.proliferative;
            diagnosticUserExist.aiAnalysis = 'podrido';

            this.frbs.uploadImage(this.file, this.user?.userName).subscribe({
              next: (value) => {
                diagnosticUserExist.imageSource = value
                console.log(diagnosticUserExist);
                
                this.serviceDiagnositc.createDiagnostic<DiagnosticPacientExist>(diagnosticUserExist,true).subscribe(() => {
                  Swal.close();
                  Swal.fire({
                    icon: 'success',
                    title: 'Informacion subida correctamente',
                    heightAuto: false,
                    showConfirmButton: true
                  }).then((response) => {
                    if (response.isConfirmed) {
                      this.returnDashboad();
                    }
                  });
                });
              },
            })

          } else {
            diagnostic.proliferative = response.result.proliferative;
            diagnostic.moderate = response.result.moderate;
            diagnostic.severe = response.result.sever;
            diagnostic.noDiabeticRetinopathy = response.result.no_dir;
            diagnostic.mild = response.result.mild;
            diagnostic.aiAnalysis = 'podrido';
            diagnostic.roles = [];
            diagnostic.roles.push({ roleName: 'Paciente' });
            diagnostic.userClaims = [];
            diagnostic.userClaims?.push({ claimType: 'Paciente', claimValue: 'Paciente' });
            diagnostic.doctorId = this.doctor.userId;
            diagnostic.nurseId = 13;
            console.log(diagnostic);

            let namePacient = this.FormPacient.get('name').value;
            this.frbs.uploadImage(this.file, namePacient).subscribe({
              next: (url: string) => {
                diagnostic.imageSource = url;
                diagnostic.userName = this.FormPacient.get('name').value;
                diagnostic.cedula = this.FormPacient.get('dni').value;
                diagnostic.email = this.FormPacient.get('email').value;
                diagnostic.password = '12355';
                diagnostic.phone = this.FormPacient.get('phone').value;
                console.log(diagnostic);


                this.serviceDiagnositc.createDiagnostic<Diagnostic>(diagnostic, false).subscribe(() => {
                  Swal.close();
                  Swal.fire({
                    icon: 'success',
                    title: 'Informacion subida correctamente',
                    heightAuto: false,
                    showConfirmButton: true
                  }).then((response) => {
                    if (response.isConfirmed) {
                      const messageService: MessengerService = inject(MessengerService);
                      const UserCredentials: UserCredentials = {
                        email: diagnostic.email,
                        password: diagnostic.password,
                        username: diagnostic.userName,
                      }
                      messageService.sendMessage(diagnostic.phone,UserCredentials).subscribe(r => {
                        console.log(r);
                        this.returnDashboad();
                      })

                     
                    }
                  });
                });
              },
            })

          }



        },
        error: (error) => {
          console.error('Error al enviar el archivo', error);
        },
        complete: () => {

        }
      });
  }
  public step(event: any) {
    this.screen = event;

  }

  public async viewResults() {
    const modal = await this.modalController.create({
      component: InfoPacientComponent,
      componentProps: {
        pacientObject: {}
      }
    });
    await modal.present();
  }

  returnDashboad() {
    this.router.navigate(['dashboard'], { replaceUrl: true })
  }

  public setDiagnostic(){

  }
}
