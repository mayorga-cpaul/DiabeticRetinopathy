import { Component, OnInit } from '@angular/core';
import { DoctorViewHistorialAnalisisPage } from '../doctor-view-historial-analisis/doctor-view-historial-analisis.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.page.html',
  styleUrls: ['./doctor-view.page.scss'],
})
export class DoctorViewPage implements OnInit {

  component = DoctorViewHistorialAnalisisPage;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public data = [
    {
      nombre: "Juancito Lopez",
      cedula: "001-101200-1214L",
      genero: "M",
      celular: "87874536",
      email: "juancitolopez@gmail.com",
      tipoDiabetes: "2",
      familiar: "No",
      doctor: "R1234",
      Img: "",
      dias: "4"
    },
    {
      nombre: "Teresa Garcia",
      cedula: "001-080599-0510F",
      genero: "F",
      celular: "78523694",
      email: "teresagarcia@gmail.com",
      tipoDiabetes: "1",
      familiar: "Si",
      doctor: "R1234",
      Img: "",
      dias: "4"
    },
    {
      nombre: "Teresa Garcia",
      cedula: "001-080599-0510F",
      genero: "F",
      celular: "78523694",
      email: "teresagarcia@gmail.com",
      tipoDiabetes: "1",
      familiar: "Si",
      doctor: "R1234",
      Img: "",
      dias: "4"
    },
    {
      nombre: "Maria Mendez",
      cedula: "001-040400-0510F",
      genero: "F",
      celular: "78523694",
      email: "mariamendez@gmail.com",
      tipoDiabetes: "1",
      familiar: "Si",
      doctor: "R1234",
      Img: "",
      dias: "4"
    },
    {
      nombre: "Jhon Wick",
      cedula: "001-250685-0510F",
      genero: "M",
      celular: "78523694",
      email: "jhonwick@gmail.com",
      tipoDiabetes: "1",
      familiar: "No",
      doctor: "R1234",
      Img: "",
      dias: "4"
    },
    {
      nombre: "Belinda Gates",
      cedula: "001-010188-0510F",
      genero: "F",
      celular: "78523694",
      email: "belindagates@gmail.com",
      tipoDiabetes: "1",
      familiar: "Si",
      doctor: "R1234",
      Img: "",
      dias: "4"
    },
  ];
  public results = [...this.data];

  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.nombre.toLowerCase()
    .indexOf(query) > -1);
  }

  public IrHistorialDiagnostico(){
    this.router.navigate(['./historialAnalisis']);
  }

}
