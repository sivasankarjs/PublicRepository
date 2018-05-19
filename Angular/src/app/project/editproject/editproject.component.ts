import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap}from'@angular/router';
import { HttpClient}from'@angular/common/http';
import { FormGroup,FormControl,Validators } from'@angular/forms';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {

  id=this.route.snapshot.paramMap.get('id');
  FormData:FormGroup;
  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }
project;
pro;
  ngOnInit() {
    this.FormData=new FormGroup({
      proname:new FormControl('',[]),
      startdate:new FormControl('',[]),
      enddate:new FormControl('',[]),
      clientname:new FormControl('',[]),
     
  }
)
this.loadProject();
 this.showproject();
  }
  loadProject()
  {
    this.http.get("http://localhost:50945/api/project").subscribe(
      data=>{
        console.log(data);
        this.pro=data;
      }
    )
  }
  showproject(){
    this.http.get(`http://localhost:50945/api/Project/${this.id}`).subscribe(
      data=>{
        console.log(data);
        this.project=data;
        this.FormData=new FormGroup({
          proname:new FormControl(this.project.proname,[]),
          startdate:new FormControl(this.project.startdate,[]),
          enddate:new FormControl(this.project.enddate,[]),
          clientname:new FormControl(this.project.clientname,[]),
             
      }
    );
    
    } 
    
  )
    
  }

  onClickSubmit(project){
    this.http.put(`http://localhost:50945/api/Project/${this.id}`,project).subscribe(
    data=>{
      console.log(data);
      this.project=data;
    } 
  ); 
  this.router.navigate(['/project/showallproject']);
}

    
}





