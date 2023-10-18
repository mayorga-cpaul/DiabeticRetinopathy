import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-access',
  templateUrl: './card-access.component.html',
  styleUrls: ['./card-access.component.scss'],
})
export class CardAccessComponent  implements OnInit {
  @Input() titleCard: string = '';
  @Input() srcImg: string = '';
  constructor() { }

  ngOnInit() {}

}
