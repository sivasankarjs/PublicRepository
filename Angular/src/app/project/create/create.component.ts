import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from'@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  FormData:FormGroup;
  constructor(private http:HttpClient,private router:Router) { }
  project;

  ngOnInit() {
    this.FormData=new FormGroup({
      proname:new FormControl('',[Validators.required]),
      startdate:new FormControl('',[Validators.required]),
      enddate:new FormControl('',[Validators.required]),
      clientname:new FormControl('',[Validators.required]),
     
 
  })
  }
  onClickSubmit(project){
    this.http.post("http://localhost:50945/api/Project",project).subscribe(
    data=>{
      console.log(data);
      this.project=data;
 

}
)
      this.router.navigate(['/project/showallproject']);

  }
}
