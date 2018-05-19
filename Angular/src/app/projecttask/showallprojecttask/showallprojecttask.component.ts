import { Component, OnInit } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Component({
  selector: 'app-showallprojecttask',
  templateUrl: './showallprojecttask.component.html',
  styleUrls: ['./showallprojecttask.component.css']
})
export class ShowallprojecttaskComponent implements OnInit {
 

  constructor(private http:HttpClient) { }
 projecttask;

  ngOnInit() {
    this.loadProjecttask();
  }
loadProjecttask()
{
  this.http.get("http://localhost:50945/api/Projecttask").subscribe(
    data=>{
      console.log(data);
      this.projecttask=data;
    }
  )
  }

  }


