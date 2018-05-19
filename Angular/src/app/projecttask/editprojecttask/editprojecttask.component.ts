import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap}from'@angular/router';
import { HttpClient}from'@angular/common/http';
import { FormGroup,FormControl,Validators } from'@angular/forms';


@Component({
  selector: 'app-editprojecttask',
  templateUrl: './editprojecttask.component.html',
  styleUrls: ['./editprojecttask.component.css']
})
export class EditprojecttaskComponent implements OnInit {
  id=this.route.snapshot.paramMap.get('id');
  FormData:FormGroup;
 

  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }
  projecttask;
  tsk;

  ngOnInit() {
    this.FormData=new FormGroup({
      assigned_to:new FormControl('',[]),
      start_date:new FormControl('',[]),
      end_date:new FormControl('',[]),
      completion_date:new FormControl('',[]),
      userstoryid:new FormControl('',[]),
     
  }
)
//this.loadProjecttask();
 this.showprojecttask();
  }
  // loadProjecttask()
  // {
  //   this.http.get("http://localhost:50945/api/ProjectTask").subscribe(
  //     data=>{
  //       console.log(data);
  //       this.tsk=data;
  //     }
  //   )
  // }
  showprojecttask(){
    this.http.get(`http://localhost:50945/api/ProjectTask/${this.id}`).subscribe(
      data=>{
        console.log(data);
        this.projecttask=data;
        this.FormData=new FormGroup({
          assigned_to:new FormControl(this.projecttask.assigned_to,[]),
          start_date:new FormControl(this.projecttask.start_date,[]),
          end_date:new FormControl(this.projecttask.end_date,[]),
          completion_date:new FormControl(this.projecttask.completion_date,[]),
          userstoryid:new FormControl(this.projecttask.userstoryid,[]),
             
      }
    );
    
    } 
    
  )
    
  }
  onClickSubmit(projecttask){
    this.http.put(`http://localhost:50945/api/ProjectTask/${this.id}`,projecttask).subscribe(
    data=>{
      console.log(data);
      this.projecttask=data;
    } 
  ); 
  
}
    
}

  


