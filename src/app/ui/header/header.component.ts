import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
//Author   : Piero Corsale
//Purpose  : Controller class of the header component
//Built on : 10/2022
export class HeaderComponent implements OnInit {

  //logo url
  logoUrl : string = '../assets/deadful tomatoes.png';

  //event to be emitted outside the component 
  @Output() titleToSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  /**
   * Emit the event 'Search by title' out of the component
   *
   * @param  value the title to search 
   */
  onSearchEvent(value: string) {
    try {
      this.titleToSearch.emit(value);
      console.log('Search by title Emitted: '+value);
    }catch(error) {
      console.log('Error on emitting the search by title event');
    }
  }

}
