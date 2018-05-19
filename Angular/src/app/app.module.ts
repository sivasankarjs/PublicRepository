import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
//import { AppModule } from './/app.module';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { UserstoriesComponent } from './userstories/userstories.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateemployeeComponent } from './employee/createemployee/createemployee.component';
import { ShowallemployeeComponent } from './employee/showallemployee/showallemployee.component';
import { ShowallprojectComponent } from './project/showallproject/showallproject.component';
import { CreateComponent } from './project/create/create.component';
import { ShowalluserstoriesComponent } from './userstories/showalluserstories/showalluserstories.component';
import { CreateuserstoriesComponent } from './userstories/createuserstories/createuserstories.component';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DeleteemployeeComponent } from './employee/deleteemployee/deleteemployee.component';
import { EditprojectComponent } from './project/editproject/editproject.component';
import {DeletepprojectsComponent} from './project/deletepprojects/deletepprojects.component';
import { EdituserstoriesComponent } from './userstories/edituserstories/edituserstories.component';
import { DeleteeuserstoriesComponent } from './userstories/deleteeuserstories/deleteeuserstories.component';
import { ProjecttaskComponent } from './projecttask/projecttask.component';
import { ShowallprojecttaskComponent } from './projecttask/showallprojecttask/showallprojecttask.component';
import { CreateprojecttaskComponent } from './projecttask/createprojecttask/createprojecttask.component';
import { EmployeeService } from './sevices/employee.service';
import { EditprojecttaskComponent } from './projecttask/editprojecttask/editprojecttask.component';
import { DeleteprojecttaskComponent } from './projecttask/deleteprojecttask/deleteprojecttask.component';
import { ManagercommentsComponent } from './managercomments/managercomments.component';
import { ShowallmanagerComponent } from './managercomments/showallmanager/showallmanager.component';
import { CreatemanagerComponent } from './managercomments/createmanager/createmanager.component';
import { EditmanagerComponent } from './managercomments/editmanager/editmanager.component';
import { DeletemanagerComponent } from './managercomments/deletemanager/deletemanager.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    ProjectComponent,
    UserstoriesComponent,
    HeaderComponent,
    FooterComponent,
    CreateemployeeComponent,
    ShowallemployeeComponent,
    ShowallprojectComponent,
    CreateComponent,
    ShowalluserstoriesComponent,
    CreateuserstoriesComponent,
    EditemployeeComponent,
    DeleteemployeeComponent,
    EditprojectComponent,
    DeletepprojectsComponent,
    EdituserstoriesComponent,
    DeleteeuserstoriesComponent,
    ProjecttaskComponent,
    ShowallprojecttaskComponent,
    CreateprojecttaskComponent,
    EditprojecttaskComponent,
    DeleteprojecttaskComponent,
    ManagercommentsComponent,
    ShowallmanagerComponent,
    CreatemanagerComponent,
    EditmanagerComponent,
    DeletemanagerComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
