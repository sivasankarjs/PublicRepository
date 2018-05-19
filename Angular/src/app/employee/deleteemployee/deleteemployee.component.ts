import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap}from'@angular/router';
import { HttpClient}from'@angular/common/http';
import { FormGroup,FormControl,Validators } from'@angular/forms';


@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent implements OnInit {
  id=this.route.snapshot.paramMap.get('id');
  FormData:FormGroup;
  
  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }
  
  em;
  ngOnInit() {
      
  
  this.loadEmployee();
 
  }
  loadEmployee()
  {

    this.http.get(`http://localhost:50945/api/employee/${this.id}`).subscribe(
      data=>{
        console.log(data);
        this.em=data;
        this.FormData=new FormGroup({
          name:new FormControl(this.em.name,[]),
          designation:new FormControl(this.em.designation,[]),
          emailid:new FormControl(this.em.emailid,[]),
          mgrid:new FormControl(this.em.mgrid,[]),
          contactno:new FormControl(this.em.contactno,[]),
          skillsets:new FormControl(this.em.skillsets,[]),    
      }
    );
    
    } 
    
  )
      
        
     
        
  }
  onClickSubmit(){
    this.http.delete(`http://localhost:50945/api/employee/${this.id}`).subscribe(
    data=>{
      console.log(data)
      
      
      
    } );
    this.router.navigate(['/employee/showall']);
 
}


}
