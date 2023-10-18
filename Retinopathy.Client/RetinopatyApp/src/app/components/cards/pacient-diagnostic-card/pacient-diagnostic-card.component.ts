import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pacient-diagnostic-card',
  templateUrl: './pacient-diagnostic-card.component.html',
  styleUrls: ['./pacient-diagnostic-card.component.scss'],
})
export class PacientDiagnosticCardComponent  implements OnInit {

  @Input() img: string = '';
  @Input() nombre: string = '';
  @Input() cedula: string = '';
  @Input() genero: string = '';
  @Input() tipoDiabetes: string = '';
  @Input() dias: string = '';

  constructor() { }

  ngOnInit() {}

}
