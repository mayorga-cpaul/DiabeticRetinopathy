import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-view-historial-analisis',
  templateUrl: './doctor-view-historial-analisis.page.html',
  styleUrls: ['./doctor-view-historial-analisis.page.scss'],
})
export class DoctorViewHistorialAnalisisPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public data = [
    {
      numeracion: 1,
      enfermedad: "ta falluco el mae",
      descripcion: "saber que nota le callo en el ojo y quedo por la verga el brother"
    },
    {
      numeracion: 2,
      enfermedad: "ta falluco el mae",
      descripcion: "saber que nota le callo en el ojo y quedo por la verga el brother"
    },
    {
      numeracion: 3,
      enfermedad: "ta falluco el mae",
      descripcion: "saber que nota le callo en el ojo y quedo por la verga el brother"
    },
    {
      numeracion: 4,
      enfermedad: "ta falluco el mae",
      descripcion: "saber que nota le callo en el ojo y quedo por la verga el brother"
    },
    {
      numeracion: 5,
      enfermedad: "ta falluco el mae",
      descripcion: "saber que nota le callo en el ojo y quedo por la verga el brother"
    },
    {
      numeracion: 6,
      enfermedad: "ta falluco el mae",
      descripcion: "saber que nota le callo en el ojo y quedo por la verga el brother"
    },

  ]
  public results = [...this.data]

}
