import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from'@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuserstories',
  templateUrl: './createuserstories.component.html',
  styleUrls: ['./createuserstories.component.css']
})
export class CreateuserstoriesComponent implements OnInit {
  FormData:FormGroup;

  constructor(private http:HttpClient,private router:Router) { }
 userstories;

  ngOnInit() {
    this.FormData=new FormGroup({
      story:new FormControl('',[Validators.required]),
      proid:new FormControl('',[Validators.required]),
     
 
  }),
  console.log(this.FormData);
    this.onClickSubmit(this.userstories);
  }
  onClickSubmit(userstories){
    this.http.post("http://localhost:50945/api/Userstories",userstories).subscribe(
    data=>{
      console.log(data);
      this.userstories=data;
 

}
)
this.router.navigate(['/userstories/showall']);
  }
  
}

  



