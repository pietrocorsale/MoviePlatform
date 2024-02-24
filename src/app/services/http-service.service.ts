import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
//Author   : Piero Corsale
//Purpose  : Service to a get request
//Built on : 10/2022
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  /**
   * Perform a get request to the specified url 
   *
   * @param  url Url for the request
   * @param  operationName Operation Name
   * @return Observable for any kind of response
   */
  getResponse(url : string,operationName :string): Observable<HttpResponse<any>>  {
    return this.http.get<any>(
      url, { observe: 'response' } 
      ).pipe(
         catchError(this.handleError<any>(operationName, []))
      );
  }
  /**
   * In charge of handling the error printing a message
   *
   * @param  operation
   * @param  result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  /**
   * Print a message on the console
   *
   * @param  message
   */
  private log(message: string) {
    console.log(message);
  }
}
