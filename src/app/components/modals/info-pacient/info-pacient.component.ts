import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { } from 'apexcharts'
import { ResultRetinopaty } from 'src/app/models/results/ResultRetinopaty';
@Component({
  selector: 'app-info-pacient',
  templateUrl: './info-pacient.component.html',
  styleUrls: ['./info-pacient.component.scss'],
})
export class InfoPacientComponent  implements AfterViewInit, OnInit {

  public chartOptions = {};

  public infoRetino: ResultRetinopaty;
  @Input() pacientObject: any = null;
  constructor(
    private modalController: ModalController,
    private router: Router) {

  }
ngOnInit(): void {
 
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


  public close(){
    this.router.navigate(['history-dignostic'],{replaceUrl: true})
    this.modalController.dismiss();
    
  }
}
