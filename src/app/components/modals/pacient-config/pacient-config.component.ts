import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Pacient } from 'src/app/models/Pacient';

@Component({
  selector: 'app-pacient-config',
  templateUrl: './pacient-config.component.html',
  styleUrls: ['./pacient-config.component.scss'],
})
export class PacientConfigComponent  implements OnInit {

  public pacient: any;

  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() {}
  public close(){
    this.router.navigate(['history-dignostic'],{replaceUrl: true})
    this.modalController.dismiss();
    
  }
}
