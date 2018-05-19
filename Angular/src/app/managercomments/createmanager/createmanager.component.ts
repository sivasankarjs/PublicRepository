import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from'@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-createmanager',
  templateUrl: './createmanager.component.html',
  styleUrls: ['./createmanager.component.css']
})
export class CreatemanagerComponent implements OnInit {
  FormData:FormGroup;
  constructor(private http:HttpClient) { }
  managercomments;
  ngOnInit() {
    this.FormData=new FormGroup({
      comments:new FormControl('',[Validators.required]),
      taskid:new FormControl('',[Validators.required])
      
  }),
  console.log(this.FormData);
    this.onClickSubmit(this.managercomments);
  }
  onClickSubmit(managercomments){
    this.http.post("http://localhost:50945/api/managercomments",managercomments).subscribe(
    data=>{
      console.log(data);
      this.managercomments=data;
 

}
)
  }
}

  


