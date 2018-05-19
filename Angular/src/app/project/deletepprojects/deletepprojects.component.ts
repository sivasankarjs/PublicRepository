import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap}from'@angular/router';
import { HttpClient}from'@angular/common/http';
import { FormGroup,FormControl,Validators } from'@angular/forms';


@Component({
  selector: 'app-deletepprojects',
  templateUrl: './deletepprojects.component.html',
  styleUrls: ['./deletepprojects.component.css']
})
export class DeletepprojectsComponent implements OnInit {
  id=this.route.snapshot.paramMap.get('id');
  FormData:FormGroup;
 
  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }
  project;
  prj;

  ngOnInit() {
    this.loadProject();
 
  }
  loadProject()
  {

    this.http.get(`http://localhost:50945/api/Project/${this.id}`).subscribe(
      data=>{
        console.log(data);
        this.prj=data;
      
        
     
       } )
  }
  onClickSubmit(){
    this.http.delete(`http://localhost:50945/api/Project/${this.id}`).subscribe(
    data=>{
      console.log(data)
      ;
    } );
    this.router.navigate(['/project/showallproject']);
 
}


}

 
  


