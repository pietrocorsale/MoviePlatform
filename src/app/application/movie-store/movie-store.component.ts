import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from './../../services/http-service.service'
import {Movie} from './../../movie'
import { SearchFilterPipe } from './../../search-filter.pipe';
import { OrderByPipe } from './../../order-by.pipe';

@Component({
  selector: 'app-movie-store',
  templateUrl: './movie-store.component.html',
  styleUrls: ['./movie-store.component.scss']
})
//Author   : Piero Corsale
//Purpose  : Controller of main component
//Built on : 10/2022
export class MovieStoreComponent implements OnInit {
  //all movies
  movie: Movie[] = [];
  //movies filtered by title
  movieFiltered: Movie[] = [];
  //movies paginated and filtered
  itemsToDisplay: Movie[] = [];

  //pagination variables
  page: number = 1;
  count: number = 0;
  tableSize: number =10;
  current: number = 1;
  perPage = 10;
  total = 0;

  //title to search
  titleToSearch : string = '';
  
  // movies url
  public movieDataUrl: string = 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json';


  constructor(private api: HttpServiceService,private pipe:SearchFilterPipe,private pipeOrder:OrderByPipe) {}

   ngOnInit(): void {
    this.fetchPosts();
  }
   /**
   * It retrieves all the movies 
   */
  fetchPosts(): void {
    this.api.getResponse(this.movieDataUrl,'get movies')
        .subscribe(data => {
          if (data && data.body && data.body.entries &&  data.body.entries.length > 0) {
             console.log(data.body.entries);

             for (const d of (data.body.entries as any)) {
                 this.movie.push(d as Movie);
             }

             this.total = Math.ceil(this.movie.length / this.perPage);
             this.movie = this.pipeOrder.transform(this.movie,'releaseYear','desc');
             this.movieFiltered = [...this.movie];

             this.onGoTo(1);
             console.log(this.movie);
          }else {
            console.log("Movies Data not available");
          }    
        });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  } 
   /**
   * Calculates the margin-right of movie card
   *
   * @param  index index of the movie from left to right starting from the first row
   */
  styleObject(index:number): Object {
    if (index <= 4) {
      if (index == 4) {
        return {'margin-right': '0%','margin-bottom':'1.09%'};
      }else {
        return {'margin-right': '1.02%','margin-bottom':'1.09%'};
      }
    } else {
      if (index == 9) {
        return {'margin-right': '0%'};
      }else {
        return {'margin-right': '1.02%','margin-bottom':'0%'};
      }
    }
  }
   /**
   * Go on a specific page using the pagination method
   *
   * @param  page page number
   */
  public onGoTo(page: number): void {
    this.current = page;
    this.itemsToDisplay = this.paginate(this.current, this.perPage);
  }
   /**
   * Go on the next page using the pagination method
   *
   * @param  page the title to search 
   */
  public onNext(page: number): void {
    this.current = page + 1
    this.itemsToDisplay = this.paginate(this.current, this.perPage);
  }
  /**
   * Go on the previous page using the pagination method
   *
   * @param  page the title to search 
   */
  public onPrevious(page: number): void {
    this.current = page - 1;
    this.itemsToDisplay = this.paginate(this.current, this.perPage);
  }
  /**
  * It returns the movies to show on the current page
  *
  * @param  current the current page
  * @param  perPage movies for page
  */
  public paginate(current: number, perPage: number): Movie[] {
    return [...this.movieFiltered.slice((current - 1) * perPage).slice(0, perPage)]
  }
   /**
   * Filter elements by title
   *
   * @param  value the title to search 
   */
  filterByTtle(value: string) {

    this.titleToSearch = value;
    this.movieFiltered= this.pipe.transform(this.movie,this.titleToSearch,'title');
    this.total = Math.ceil(this.movieFiltered.length / this.perPage);
    this.current = 1;
    this.itemsToDisplay = this.paginate(this.current, this.perPage);
    
    console.log(value);
  }

}
