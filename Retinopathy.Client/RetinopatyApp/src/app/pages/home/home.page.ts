import { AfterViewInit, Component, ElementRef, OnInit,  ViewChild,} from '@angular/core';
import { AlertController, ModalController} from '@ionic/angular';
import { DoctorPage } from '../doctor/doctor.page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit,AfterViewInit {
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;
  @ViewChild('IsDone') buttonDone: ElementRef<any>;
  public imageSelect: string | ArrayBuffer | null = null;
  public doctor: string = '';

  public IsLoadImage: FormGroup;
  public FormPacient: FormGroup;
  public PacientExist: boolean = true;
  public ViewInfo: boolean = false;
  public AviableStep: boolean = false;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController,
    private formBuilder: FormBuilder) {

    this.IsLoadImage = this.formBuilder.group({
      image: [null, Validators.required],
    });

    this.FormPacient = this.formBuilder.group({
      dni: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(15)]],
      name: ['', [Validators.required]]     
    });

    
    
  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
      
  }
  public processImage(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSelect = e.target?.result;
      };
      reader.readAsDataURL(inputElement.files[0]);
    }
  }

  public async addDoctor() {
    const modal = this.modalController.create({
      component: DoctorPage,
    });
    (await modal).present();
    (await modal).onDidDismiss().then((result) => {
      const info = result.data;
      if (info !== undefined) {
        this.doctor = info.Name
      }
    });
  }

  public thisPacientExist(){
    if(this.FormPacient.get('dni').valid == true){
      if(this.GetPacient()){
        this.PacientExist = true;
        this.ViewInfo = true;
        this.AviableStep = true;
        console.log(this.AviableStep);
        
        this.showAlert('El paciente ya existe');

      }else{
        this.showAlert('El paciente no existe');
        this.PacientExist = false;
        this.ViewInfo = false;
        this.AviableStep = false;
        console.log(this.AviableStep);
      }
     
    }else{
      this.showAlert('El numero de cedula no esta completo');
      
    }
  }

  async showAlert(message: string) {
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
  
  public processData(){
    this.router.navigate(['results'],{replaceUrl:true});
  }

  public IsDone(){
    this.router.navigate(['results'],{replaceUrl:true});
  }
}
