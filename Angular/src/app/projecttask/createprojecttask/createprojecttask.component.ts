import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from'@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createprojecttask',
  templateUrl: './createprojecttask.component.html',
  styleUrls: ['./createprojecttask.component.css']
})
export class CreateprojecttaskComponent implements OnInit {
  FormData:FormGroup;
 
  constructor(private http:HttpClient) { }
 projecttask;

  ngOnInit() {
    this.FormData=new FormGroup({
      assigned_to:new FormControl('',[Validators.required]),
      start_date:new FormControl('',[Validators.required]),
      end_date:new FormControl('',[Validators.required]),
      completion_date:new FormControl('',[Validators.required]),
      userstoryid:new FormControl('',[Validators.required]), 
     
 
  }),
  console.log(this.FormData);
    this.onClickSubmit(this.projecttask);
  }
  onClickSubmit(projecttask){
    this.http.post("http://localhost:50945/api/Projecttask",projecttask).subscribe(
    data=>{
      console.log(data);
      this.projecttask=data;
 

}
)
  }
}



