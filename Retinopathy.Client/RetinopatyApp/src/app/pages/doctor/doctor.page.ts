import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.page.html',
  styleUrls: ['./doctor.page.scss'],
})
export class DoctorPage implements OnInit {

  public itemNew: string = '';

  listDoctors = [
    {Name:'Doc. Kevin Jair Ortiz',Job:'Muy pro', Img:'https://i.pravatar.cc/300?u=b'},
    
  ]
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
 
  dimiss(){
    this.modalController.dismiss();
  }

  public assing(doctor: any){
    this.modalController.dismiss(doctor);
  }

}
