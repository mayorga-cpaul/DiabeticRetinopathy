import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.page.html',
  styleUrls: ['./doctor.page.scss'],
})
export class DoctorPage implements OnInit {
  listaItems: string[] = ['Platillos','Bebidas','Postres'];
  public itemNew: string = '';
  listDoctors = [
    {Name:'',Job:'', Img:'' }
  ]
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  AddItem(){
    if(this.itemNew.trim() !== ''){
      this.listaItems.push(this.itemNew);
      this.itemNew = '';
    }
    
  }
  dimiss(){
    this.modalController.dismiss();
  }

  public assing(){
    this.modalController.dismiss({name:'Doc. Kevin Jair Ortiz Galeano'});
  }

}
