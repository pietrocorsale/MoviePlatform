import { Component, OnInit,
  EventEmitter,
  Input,
  Output,
  SimpleChanges, } from '@angular/core';
import {HttpServiceService} from './../../services/http-service.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
//Author   : Piero Corsale
//Purpose  : Controller class of the pagination component
//Built on : 10/2022
export class PaginationComponent implements OnInit {
  //Input properties
  @Input() current: number = 0;
  @Input() total: number = 0;
  @Input() width: string = '';
  @Input() height: string = '';

  //Output properties
  @Output() goTo: EventEmitter<number> = new EventEmitter<number>();
  @Output() next: EventEmitter<number> = new EventEmitter<number>();
  @Output() previous: EventEmitter<number> = new EventEmitter<number>();

  //numbers of the pages to display
  public pages: number[] = [];
  public iconPrevious: String = "../assets/prev.png";
  public iconNext: String = "../assets/next.png";

  constructor(private api: HttpServiceService) { }

  ngOnInit(): void { }

  /**
   * Call the getPages method each time the current page or total number of pages changes
   *
   * @param  changes SimpleChanges object containing the changes on the input properties
   */
  ngOnChanges(changes: SimpleChanges): void {
    if  (
      (changes['current'] && changes['current'].currentValue) ||
      (changes['total'] && (changes['total'].currentValue || changes['total'].currentValue ==0))
    ) {
      this.pages = this.getPages(this.current, this.total);
    }
  }
   /**
   * Emit the event 'Go on the specified page' out of the component
   *
   * @param  page 
   */
  public onGoTo(page: number): void {
    try {
      this.goTo.emit(page)
      console.log('Go on the specified page event Emitted: '+page);
    }catch(error) {
      console.log('Error on emitting the Go on the specified page event');
    }
   
  }
  /**
   *  Emit the event 'Go on the next page' out of the component
   */
  public onNext(): void {
    try {
      this.next.emit(this.current);
      console.log('Go on the next page Emitted: '+this.current);
    }catch(error) {
      console.log('Error on emitting the Go on the next page event');
    }
    
  }
  /**
   *  Emit the event 'Go on the previous page' out of the component
   */
  public onPrevious(): void {
    try {
      this.previous.next(this.current);
      console.log('Go on the previous page Emitted: '+this.current);
    }catch(error) {
      console.log('Error on emitting the Go on the previous page event');
    }
  }
   /**
   * Calculate the page numbers to display
   *
   * @param  current current page
   * @param  total   total number of pages
   * 
   * @return Page Numbers to display
   */
  private getPages(current: number, total: number): number[] {
    var pageNumbers = Array();

    if (total <= 0)  {
      console.log('Total is be less or equal than 0');
    }
    else if (total > 0 && total <= 5) {
      pageNumbers = [...Array(total).keys()].map(x => ++x);
    }
    else if (current <= total -4) {
      for (let i = current; i < current+5; ++i) pageNumbers.push(i);
    }
    else {
      for (let i = total -4; i <= total; ++i) pageNumbers.push(i);
    }

    return pageNumbers;
  }
}
