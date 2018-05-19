import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap}from'@angular/router';
import { HttpClient}from'@angular/common/http';
import { FormGroup,FormControl,Validators } from'@angular/forms';


@Component({
  selector: 'app-editmanager',
  templateUrl: './editmanager.component.html',
  styleUrls: ['./editmanager.component.css']
})
export class EditmanagerComponent implements OnInit {
  id=this.route.snapshot.paramMap.get('id');
  FormData:FormGroup;
  
  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }
  managercomments;
  mgr;
  ngOnInit() {
    this.FormData=new FormGroup({
      comments:new FormControl('',[]),
      taskid:new FormControl('',[]),
      
  }
)
this.loadManagerComments();
 this.showManagerComments();
  }
  loadManagerComments()
  {
    this.http.get("http://localhost:50945/api/managercomments").subscribe(
      data=>{
        console.log(data);
        this.mgr=data;
      }
    )
  }
  showManagerComments(){
    this.http.get(`http://localhost:50945/api/managercomments/${this.id}`).subscribe(
      data=>{
        console.log(data);
        this.managercomments=data;
        this.FormData=new FormGroup({
          comments:new FormControl(this.managercomments.comments,[]),
          taskid:new FormControl(this.managercomments.taskid,[]),
          }
    );
    
    } 
    
  )
  }
  onClickSubmit(managercomments){
    this.http.put(`http://localhost:50945/api/managercomments/${this.id}`,managercomments).subscribe(
    data=>{
      console.log(data);
      this.managercomments=data;
    } 
  ); 
  
}
    
}


