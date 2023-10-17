import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-nourse',
  templateUrl: './card-nourse.component.html',
  styleUrls: ['./card-nourse.component.scss'],
})
export class CardNourseComponent  implements OnInit {

  @Input() idalert: string = '';
  @Input() urlImg: string = '';
  @Input() nombre: string = '';
  @Input() apellido: string = '';
  @Input() especialidad: string = '';
  @Input() userid: string = '';
  @Input() dni: string = '';
  @Input() phone: string = '';
  @Input() fecha: string = '';
  @Input() email: string = '';

  constructor() { }

  ngOnInit() {}

}
