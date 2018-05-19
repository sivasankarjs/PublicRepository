import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap}from'@angular/router';
import { HttpClient}from'@angular/common/http';
import { FormGroup,FormControl,Validators } from'@angular/forms';


@Component({
  selector: 'app-deleteprojecttask',
  templateUrl: './deleteprojecttask.component.html',
  styleUrls: ['./deleteprojecttask.component.css']
})
export class DeleteprojecttaskComponent implements OnInit {
  id=this.route.snapshot.paramMap.get('id');
  FormData:FormGroup;
 
  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }
 projecttask;
 task;
  ngOnInit() {
    this.loadProjecttask();
 
  }
  loadProjecttask()
  {

    this.http.get(`http://localhost:50945/api/ProjectTask/${this.id}`).subscribe(
      data=>{
        console.log(data);
        this.task=data;
      
        
     
       } )
  }
  onClickSubmit(){
    this.http.delete(`http://localhost:50945/api/ProjectTask/${this.id}`).subscribe(
    data=>{
      console.log(data)
      this.router.navigate(['/projecttask']);
      this.router.navigate(['/projecttask/showall']);
    } );
  
 
}


}

 
  


