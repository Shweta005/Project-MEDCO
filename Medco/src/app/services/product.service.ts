import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Iproduct } from 'src/app/IProduct';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Icategory } from '../ICategory';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private base_url = 'http://localhost:3000/app';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  id: string ='';
  constructor(private httpClient: HttpClient) {}

  //get all objects
  public getProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(this.base_url + '/products');
  }
  //get all objects
  public getCategories(): Observable<Icategory[]> {
    return this.httpClient.get<Icategory[]>(this.base_url + '/categories');
  }

  //get single item
  public getCategoryById(id :any)  {
    return this.httpClient
      .get(this.base_url + '/categories/'+id)
      .pipe(catchError(this.handleError));
  }

  public updateCategory(id:any, categoryObj:any){
    console.log(categoryObj)
    return this.httpClient.put(this.base_url + '/categories/update/'+id,categoryObj)
  }

  //get single item
  public getItem(id:any): Observable<any> {
    return this.httpClient
      .get<Iproduct[]>(`${this.base_url}/${id}`)
      .pipe(catchError(this.handleError));
  }
  //create new
  addCategory(categoryObject: any) {
    return this.httpClient.post(
      this.base_url + '/categories/add',
      categoryObject
    );
  }
   //create new
   addProduct(productObject: any) {
    return this.httpClient.post(
      this.base_url + '/products/add',
      productObject
    );
  }

  // // Edit/ Update
  // updateCategory(id: any, data: any): Observable<any> {
  //   return this.httpClient
  //     .put(`${this.base_url}/${id}`, data)
  //     .pipe(catchError(this.handleError));
  // }

  // Delete
  deleteCategory(id: any) {
    return this.httpClient.delete(this.base_url + '/categories/delete/' + id);
  }



  // Search By Name
  filterByTitle(title: any): Observable<any> {
    return this.httpClient
      .get(`${this.base_url}?title_like=${title}`)
      .pipe(catchError(this.handleError));
  }


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
