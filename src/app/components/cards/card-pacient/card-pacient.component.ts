import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pacient',
  templateUrl: './card-pacient.component.html',
  styleUrls: ['./card-pacient.component.scss'],
})
export class CardPacientComponent  implements OnInit {

  @Input() name : string = '';
  @Input() gender: string = '';
  constructor() { }

  ngOnInit() {}

}
