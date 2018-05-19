import { Component, OnInit } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  employee;

  ngOnInit() {
    this.loadEmployee();
  }
loadEmployee()
{
  this.http.get("http://localhost:50945/api/employee").subscribe(
    data=>{
      console.log(data);
      this.employee=data;
    }
  )
}
}
