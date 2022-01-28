import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Iuser } from 'src/app/IUser';
import { catchError, map } from 'rxjs/operators';
import {  Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private base_url = "http://localhost:3000/app";

  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })

 };
  constructor(private httpClient:HttpClient) { }

  //get all objects
  public getUsers(): Observable <Iuser[] >
  {
     return this.httpClient.get<Iuser[]>(this.base_url+"/users");
  }

  // public getUser(id: any): Observable <Iuser[] >
  // {
  //   let api = `${this.base_url}/user/${id}`;
  //    return this.httpClient.get<Iuser[]>(api)  //{ headers: this.httpHeaders })
  //    .pipe(map((res: any) => {
  //        return res || {}
  //      }),
  //      catchError(this.handleError)
  //    )
  // }
  // Error
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
