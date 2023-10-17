import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InfoPacientComponent } from 'src/app/components/modals/info-pacient/info-pacient.component';
import { PacientConfigComponent } from 'src/app/components/modals/pacient-config/pacient-config.component';

@Component({
  selector: 'app-history-dignostic',
  templateUrl: './history-dignostic.page.html',
  styleUrls: ['./history-dignostic.page.scss'],
})
export class HistoryDignosticPage implements OnInit {


  constructor(private modalController: ModalController) { }
  ngOnInit() {
  }
  public data = [
    {
      id: 1,
      name: 'Flor de Maria Rivas Ortega',
      sex: 'female'
    },
    {
      id: 2,
      name: 'Kevin Jair Ortiz Galeano',
      sex: 'masculine'
    },
    {
      id: 3,
      name: 'Daysi del Carmen Rivas Ortega',
      sex: 'female'
    }
  ];
  public results = [];

  
  public handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.name.toLowerCase().indexOf(query) > -1);
    console.log(this.results);
    
  }
  public async getInfoPacient(pacient){
    const modal = await this.modalController.create({
      component: PacientConfigComponent,
      componentProps:{
        pacient: this.data[0]
      }
    });
    await modal.present()
  }

}
