import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
//Author   : Piero Corsale
//Purpose  : Controller class of the card component
//Built on : 10/2022
export class CardComponent implements OnInit {

  //input properties
  @Input() url : string = '';
  @Input() title : string = '';
  @Input() description : string = '';
  @Input() releaseYear : number =0;
  @Input() width : number = 0;
  @Input() height :  number = 0;
  @Input() movieUrl : string = '#';

  constructor() { }

  ngOnInit(): void {}

}
