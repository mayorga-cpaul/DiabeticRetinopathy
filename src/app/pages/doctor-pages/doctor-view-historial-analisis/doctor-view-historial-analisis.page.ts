import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DoctotViewHistorialDiagnosticoPage } from '../doctot-view-diagnostico/doctot-view-historial-diagnostico.page';
import { ActivatedRoute } from '@angular/router';
import { DiagnosticPatient } from 'src/app/models/results/DiagnosticPatient';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

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

  public formatDate(date: string) {
    const originalDate = new Date(date);
    const day = originalDate.getDate().toString().padStart(2, '0');
    const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
    const year = originalDate.getFullYear();
    const dayName = format(originalDate, 'EEEE', { locale: es });
    const monthName = format(originalDate, 'MMMM', { locale: es });
    const formattedDate = `${dayName} ${day} de ${monthName} ${year}`;
   return formattedDate;

  }
}
