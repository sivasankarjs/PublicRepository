import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap}from'@angular/router';
import { HttpClient}from'@angular/common/http';
import { FormGroup,FormControl,Validators } from'@angular/forms';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

id=this.route.snapshot.paramMap.get('id');
FormData:FormGroup;
  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }
  employee;
  employees
  
  ngOnInit() {
    this.FormData=new FormGroup({
      name:new FormControl('',[]),
      designation:new FormControl('',[]),
      emailid:new FormControl('',[]),
      mgrid:new FormControl('',[]),
      contactno:new FormControl('',[]),
      skillsets:new FormControl('',[]),    
    }
  );
 //this.loadEmployee();
 this.showemployee();
  }
  /*loadEmployee()
  {
    this.http.get("http://localhost:50945/api/employee").subscribe(
      data=>{
        console.log(data);
        this.employees=data;
        this.FormData=new FormGroup({
          name:new FormControl(this.employees.name,[]),
          designation:new FormControl(this.employees.designation,[]),
          emailid:new FormControl(this.employees.emailid,[]),
          mgrid:new FormControl(this.employees.mgrid,[]),
          contactno:new FormControl(this.employees.contactno,[]),
          skillsets:new FormControl(this.employees.skillsets,[]),    
      }
    );
    
    } 
    
  )
      
    
  }*/
  showemployee(){
    this.http.get(`http://localhost:50945/api/employee/${this.id}`).subscribe(
      data=>{
        console.log(data);
        this.employee=data;
        this.FormData=new FormGroup({
          name:new FormControl(this.employee.name,[]),
          designation:new FormControl(this.employee.designation,[]),
          emailid:new FormControl(this.employee.emailid,[]),
          mgrid:new FormControl(this.employee.mgrid,[]),
          contactno:new FormControl(this.employee.contactno,[]),
          skillsets:new FormControl(this.employee.skillsets,[]),    
      }
    )
    
      });
}

  onClickSubmit(employee){
    this.http.put(`http://localhost:50945/api/employee/${this.id}`,employee).subscribe(
    data=>{
      console.log(data);
      
      
    } 
  ); 
  this.router.navigate(['/employee/showall']);
  
}
    
}

