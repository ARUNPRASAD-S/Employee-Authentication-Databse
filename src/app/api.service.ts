import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee} from './employee';
import { catchError } from 'rxjs/operators';
//import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
API_SERVER="http://localhost:3000";
  constructor(private httpclient:HttpClient) { }
  public reademployees(){
    return this.httpclient.get<Employee[]>(`${this.API_SERVER}/employees`);
  }
  public createemployees(employees:Employee){
    return this.httpclient.post<Employee[]>(`${this.API_SERVER}/employees/create`,employees)
  }
  public updateemployees(employees:Employee) {
    return this.httpclient.put<Employee[]>(`${this.API_SERVER}/employees/${employees.id}/update`,employees);
  }
  public deleteemployees(id: number) {
    return this.httpclient.delete(`${this.API_SERVER}/employees/${id}/delete`);
  }
// private handleError(errorResponse:HttpErrorResponse){
//   if(errorResponse.error instanceof ErrorEvent){
//     console.error('Client Side Error:',errorResponse.error.message);
//   }else{
//     console.error('Server Side Error:',errorResponse);
//   }
//   return new ErrorObservable('There is a Problem with Service');
// }
// private handleError(errorResponse: HttpErrorResponse) {
//   if (errorResponse.error instanceof ErrorEvent) {
//   console.error('Client Side Error :', errorResponse.error.message);
//   } else {
//   console.error('Server Side Error :', errorResponse);
//   }
//   return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
//   }
}
