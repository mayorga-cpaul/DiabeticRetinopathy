import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts'
import { } from 'apexcharts'
import { IonModal, ModalController, ToastController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components'

@Component({
  selector: 'app-doctot-view-historial-diagnostico',
  templateUrl: './doctot-view-historial-diagnostico.page.html',
  styleUrls: ['./doctot-view-historial-diagnostico.page.scss'],
})
export class DoctotViewHistorialDiagnosticoPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;

  public chartOptions = {};
  public pacientInfo: any;
  
  constructor(public modalController: ModalController, private toastController: ToastController) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    this.chartOptions = {
      chart: {
        type: "area",
        height: 180,
        toolbar: { show: false },
        zoom: { enabled: false },

      },
      colors: ["#3498db"],
      series: [{ name: "Resultado", data: [18, 50, 42, 94, 41] }],
      dataLabels: { enabled: false },
      stroke: { width: 3, curve: "smooth" },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0,
          stops: [0, 90, 100]
        }
      },
      xaxis: {
        categories: ["Leve", "Moderado", "NO_DR", "Proliferado", "Severo"],
        axisBorder: { show: false },
        labels: { style: { colors: "#a7a7a7", fontFamily: "Poppins" } }
      },
      yaxis: {
        show: false
      },
      grid: { borderColor: "rgba(0, 0, 0, 0, 0)", padding: { top: -30, bottom: -8, left: 12, right: 12 } },
      tooltip: {
        enabled: true,
        fixed: {
          enable: false
        },
        x: {
          show: false
        },
        y: {
          formatter: value => `${value}K`
        },
        style: { fontFamily: "Poppins" }
      },
      markers: { show: false },

    }
    const chart = new ApexCharts(document.querySelector(".chart-area"), this.chartOptions)
    chart.render();
  }

  // boton flotante para editar

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
  // modal para agregar empleado
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }
}
