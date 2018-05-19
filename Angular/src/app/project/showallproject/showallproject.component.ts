import { Component, OnInit } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Component({
  selector: 'app-showallproject',
  templateUrl: './showallproject.component.html',
  styleUrls: ['./showallproject.component.css']
})
export class ShowallprojectComponent implements OnInit {

  constructor(private http:HttpClient) { }
  project;
  
  ngOnInit() {
    this.loadProject();
  }
loadProject()
{
  this.http.get("http://localhost:50945/api/Project").subscribe(
    data=>{
      console.log(data);
      this.project=data;
    }
  )
  }

}
