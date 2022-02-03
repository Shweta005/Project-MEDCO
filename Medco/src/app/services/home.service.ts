import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import { Ihome } from '../IHome';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private base_url = 'http://localhost:3000/app';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private httpClient: HttpClient) { }

   //get all objects
  //  public getProducts(): Observable<any> {
  //   return this.httpClient.get<Ihome[]>(this.base_url + '/products').pipe(map((res:any)=>{
  //     return res;
  //   }));
  // }
  public getProducts():Observable<Ihome[]> {
    return this.httpClient.get<Ihome[]>(this.base_url + '/products').pipe(map((res:any)=>{
      return res;
    }));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
