import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-showalluserstories',
  templateUrl: './showalluserstories.component.html',
  styleUrls: ['./showalluserstories.component.css']
})
export class ShowalluserstoriesComponent implements OnInit {

  constructor(private http:HttpClient) { }
  userstories;
  ngOnInit() {
    this.loadUserstories();
  }
  loadUserstories()
  {
    this.http.get("http://localhost:50945/api/Userstories").subscribe(
      data=>{
        console.log(data);
        this.userstories=data;
      }
    )
  }

}


  


