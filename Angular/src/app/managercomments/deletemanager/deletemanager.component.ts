import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap}from'@angular/router';
import { HttpClient}from'@angular/common/http';
import { FormGroup,FormControl,Validators } from'@angular/forms';


@Component({
  selector: 'app-deletemanager',
  templateUrl: './deletemanager.component.html',
  styleUrls: ['./deletemanager.component.css']
})
export class DeletemanagerComponent implements OnInit {
  id=this.route.snapshot.paramMap.get('id');
  FormData:FormGroup;
 

  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }
  managercomments;
  mgr;

  ngOnInit() {
    this.loadManagerComments();
 
  }
  loadManagerComments()
  {

    this.http.get(`http://localhost:50945/api/managercomments/${this.id}`).subscribe(
      data=>{
        console.log(data);
        this.mgr=data;
      
        
     
       } )
  }
  onClickSubmit(){
    this.http.delete(`http://localhost:50945/api/managercomments/${this.id}`).subscribe(
    data=>{
      console.log(data)
      this.router.navigate(['/managercomments']);
      this.router.navigate(['/managercomments/showmanagercomments']);
    } );
  
 
}


  }


