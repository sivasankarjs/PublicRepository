import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-userstories',
  templateUrl: './userstories.component.html',
  styleUrls: ['./userstories.component.css']
})
export class UserstoriesComponent implements OnInit {

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
