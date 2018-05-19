import { Component, OnInit } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Component({
  selector: 'app-projecttask',
  templateUrl: './projecttask.component.html',
  styleUrls: ['./projecttask.component.css']
})
export class ProjecttaskComponent implements OnInit {

  constructor(private http:HttpClient) { }
projecttask;

  ngOnInit() {
    this.loadProjecttask();
  }
  loadProjecttask()
  {
    this.http.get("http://localhost:50945/api/projecttask").subscribe(
      data=>{
        console.log(data);
        this.projecttask=data;
      }
    )
  }
  }


