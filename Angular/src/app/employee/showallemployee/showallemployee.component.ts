import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../sevices/employee.service';

@Component({
  selector: 'app-showallemployee',
  templateUrl: './showallemployee.component.html',
  styleUrls: ['./showallemployee.component.css']
})
export class ShowallemployeeComponent implements OnInit {

  constructor(private employeeServices:EmployeeService) { }
  employee;
  
  ngOnInit() {
    this.employeeServices.employees$.subscribe(data =>{this.employee=data;
       console.log(data);
      });
      this.employeeServices.ErrorResponse$.subscribe(message=>{
        console.log(message);
        alert(message);
      });
      this.employeeServices.getAllEmployees();
  }
  
  }




  


