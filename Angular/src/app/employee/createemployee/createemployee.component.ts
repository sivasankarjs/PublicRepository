import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from'@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
FormData:FormGroup;
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }
 employee;
 employees;
  ngOnInit() {
    this.FormData=new FormGroup({
     name:new FormControl('',[Validators.required]),
     designation:new FormControl('',[Validators.required]),
     emailid:new FormControl('',[Validators.required]),
     mgrid:new FormControl('',[]),
     contactno:new FormControl('',[]),
     skillsets:new FormControl('',[]),    


    });
    console.log(this.FormData);
    this.loademployee();
  }
  loademployee()
  {
    this.http.get("http://localhost:50945/api/employee").subscribe(
      data=>{
        this.employees=data;
      }
    )
  }
  onClickSubmit(employee){
    this.http.post("http://localhost:50945/api/employee",employee).subscribe(
    data=>{
      console.log(data);
      this.employee=data;
    }


  )
  this.router.navigate(['/employee/showall']);
  }
  }


