import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DoctotViewHistorialDiagnosticoPage } from '../doctot-view-diagnostico/doctot-view-historial-diagnostico.page';
import { ActivatedRoute } from '@angular/router';
import { DiagnosticPatient } from 'src/app/models/results/DiagnosticPatient';

@Component({
  selector: 'app-doctor-view-historial-analisis',
  templateUrl: './doctor-view-historial-analisis.page.html',
  styleUrls: ['./doctor-view-historial-analisis.page.scss'],
})
export class DoctorViewHistorialAnalisisPage implements OnInit {

  listPatientsDiagnostic: DiagnosticPatient[];
  constructor(private modalController: ModalController, private router: ActivatedRoute) {

    router.queryParams.subscribe((queryParams) => {

      const data = JSON.parse(queryParams['data']) as DiagnosticPatient[]
      console.log(data);
      data.map(x => {
        const data = Date.parse(x.createdDate);
        console.log(data);
        
      })
      this.listPatientsDiagnostic = data;

    })
  }

  ngOnInit() {
  }



  public async viewDiagnosic(pacient: any) {
    const modal = await this.modalController.create({
      component: DoctotViewHistorialDiagnosticoPage,
      componentProps: {
        pacientInfo: pacient
      }

    })
    await modal.present();
  }

}
