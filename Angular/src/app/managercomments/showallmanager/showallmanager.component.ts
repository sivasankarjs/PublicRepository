import { Component, OnInit } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Component({
  selector: 'app-showallmanager',
  templateUrl: './showallmanager.component.html',
  styleUrls: ['./showallmanager.component.css']
})
export class ShowallmanagerComponent implements OnInit {

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

  


