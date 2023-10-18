import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-add-forms',
  templateUrl: './doctor-add-forms.component.html',
  styleUrls: ['./doctor-add-forms.component.scss'],
})
export class DoctorAddFormsComponent  implements OnInit {

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
