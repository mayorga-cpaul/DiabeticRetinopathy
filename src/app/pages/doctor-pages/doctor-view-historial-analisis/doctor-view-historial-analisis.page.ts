import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DoctotViewHistorialDiagnosticoPage } from '../doctot-view-diagnostico/doctot-view-historial-diagnostico.page';

@Component({
  selector: 'app-doctor-view-historial-analisis',
  templateUrl: './doctor-view-historial-analisis.page.html',
  styleUrls: ['./doctor-view-historial-analisis.page.scss'],
})
export class DoctorViewHistorialAnalisisPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  public data = [
    {
      numeracion: 1,
      enfermedad: "ta falluco el mae",
      descripcion: "saber que nota le callo en el ojo y quedo por la verga el brother"
    },
    {
      numeracion: 2,
      enfermedad: "ta falluco el mae",
      descripcion: "saber que nota le callo en el ojo y quedo por la verga el brother"
    },
    {
      numeracion: 3,
      enfermedad: "ta falluco el mae",
      descripcion: "saber que nota le callo en el ojo y quedo por la verga el brother"
    },
    {
      numeracion: 4,
      enfermedad: "ta falluco el mae",
      descripcion: "saber que nota le callo en el ojo y quedo por la verga el brother"
    },
    {
      numeracion: 5,
      enfermedad: "ta falluco el mae",
      descripcion: "saber que nota le callo en el ojo y quedo por la verga el brother"
    },
    {
      numeracion: 6,
      enfermedad: "ta falluco el mae",
      descripcion: "saber que nota le callo en el ojo y quedo por la verga el brother"
    },

  ]
  public results = [...this.data];

  public async viewDiagnosic(pacient: any){
    const modal = await this.modalController.create({
      component:DoctotViewHistorialDiagnosticoPage,
      componentProps:{
        pacientInfo: pacient
      }

    })
    await modal.present();
  }

}
