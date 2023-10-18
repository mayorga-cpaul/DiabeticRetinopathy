import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nurse-add-forms',
  templateUrl: './nurse-add-forms.component.html',
  styleUrls: ['./nurse-add-forms.component.scss'],
})
export class NurseAddFormsComponent  implements OnInit {

  public userid: string = '';
  public name: string = '';
  public lastname: string = '';
  public phone: string = '';
  public dni: string = '';
  public email: string = '';
  public fecha: string = '';
  public speciality: string = '';
  public role: string = '';
  public state: string = '';

  constructor() { }

  ngOnInit() {}

}
