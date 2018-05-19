import { Injectable } from '@angular/core';
import {CrudService} from'./crud.service';
import {Subject}from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseurl= 'http://localhost:50945';
  private employees=new Subject<any>();
  employees$=this.employees.asObservable();

  private ErrorResponse=new Subject<any>();
  ErrorResponse$=this.ErrorResponse.asObservable();


  constructor(private crudService:CrudService) { }

  getAllEmployees() {
  const url = `${this.baseurl}/api/employee`;
  this.crudService.Read(url).subscribe(data =>{
  this.employees.next(data);
  },error=>{
    console.log(error);
    this.ErrorResponse.next(error);
  }
);
  }
}
