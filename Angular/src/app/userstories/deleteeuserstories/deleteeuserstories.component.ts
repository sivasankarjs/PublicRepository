import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap}from'@angular/router';
import { HttpClient}from'@angular/common/http';
import { FormGroup,FormControl,Validators } from'@angular/forms';


@Component({
  selector: 'app-deleteeuserstories',
  templateUrl: './deleteeuserstories.component.html',
  styleUrls: ['./deleteeuserstories.component.css']
})
export class DeleteeuserstoriesComponent implements OnInit {
  id=this.route.snapshot.paramMap.get('id');

 
  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }
 userstories;
  user;
  ngOnInit() {
    this.loadUserstories();
  }

  loadUserstories(){
    this.http.get(`http://localhost:50945/api/Userstories/${this.id}`).subscribe(
      data=>{
        console.log(data);
        this.user=data;
  });
}

onClickSubmit(){
  this.http.delete(`http://localhost:50945/api/Userstories/${this.id}`).subscribe(
  data=>{
    console.log(data)
    
    this.router.navigate(['/userstories/showall']);
  } );
}

}
