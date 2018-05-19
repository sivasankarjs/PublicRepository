import { Component, OnInit } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private http:HttpClient) { }
  project;
 
  ngOnInit() {
    this.loadProject();
  }
  loadProject()
  {
    this.http.get("http://localhost:50945/api/project").subscribe(
      data=>{
        console.log(data);
        this.project=data;
      }
    )
  }

}
