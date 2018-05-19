import { Component, OnInit } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Component({
  selector: 'app-managercomments',
  templateUrl: './managercomments.component.html',
  styleUrls: ['./managercomments.component.css']
})
export class ManagercommentsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  managercomments;

  ngOnInit() {
    this.loadManagerComments();
  }
loadManagerComments()
{
  this.http.get("http://localhost:50945/api/managercomments").subscribe(
    data=>{
      console.log(data);
      this.managercomments=data;
    }
  )
}
}

  


