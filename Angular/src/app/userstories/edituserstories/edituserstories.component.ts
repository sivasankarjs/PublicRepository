import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap}from'@angular/router';
import { HttpClient}from'@angular/common/http';
import { FormGroup,FormControl,Validators } from'@angular/forms';


@Component({
  selector: 'app-edituserstories',
  templateUrl: './edituserstories.component.html',
  styleUrls: ['./edituserstories.component.css']
})
export class EdituserstoriesComponent implements OnInit {
  id=this.route.snapshot.paramMap.get('id');
  FormData:FormGroup;
  
  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }
  userstories;
 usr;
  ngOnInit() {
    this.FormData=new FormGroup({
      story:new FormControl('',[]),
      proid:new FormControl('',[]),
      
    }
  )
 this.loadUserstories();
 this.showUserstories();
  }
  loadUserstories()
  {
    this.http.get("http://localhost:50945/api/Userstories").subscribe(
      data=>{
        console.log(data);
        this.usr=data;
      }
    )
  }
  showUserstories(){
    this.http.get(`http://localhost:50945/api/Userstories/${this.id}`).subscribe(
      data=>{
        console.log(data);
        this.userstories=data;
        this.FormData=new FormGroup({
          story:new FormControl(this.userstories.story,[]),
          proid:new FormControl(this.userstories.proid,[]),
             
      }
    );
    
    }) 
  
   
  

  }
  onClickSubmit(userstory){
    this.http.put(`http://localhost:50945/api/Userstories/${this.id}`,userstory).subscribe(
    data=>{
      console.log(data)
      
      this.router.navigate(['/userstories/showall']);
    } );
  }
  
}
