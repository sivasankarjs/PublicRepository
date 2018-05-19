import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
//import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { UserstoriesComponent } from './userstories/userstories.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import {ShowallemployeeComponent} from './employee/showallemployee/showallemployee.component';
import { CreateemployeeComponent } from './employee/createemployee/createemployee.component';
import {ShowallprojectComponent} from './project/showallproject/showallproject.component';
import {CreateComponent} from './project/create/create.component';
import {ShowalluserstoriesComponent} from './userstories/showalluserstories/showalluserstories.component';
import {CreateuserstoriesComponent} from './userstories/createuserstories/createuserstories.component';
import {EditemployeeComponent} from './employee/editemployee/editemployee.component';
import { DeleteemployeeComponent } from './employee/deleteemployee/deleteemployee.component';
import {EditprojectComponent} from './project/editproject/editproject.component';
import {DeletepprojectsComponent}from './project/deletepprojects/deletepprojects.component';
import {EdituserstoriesComponent} from './userstories/edituserstories/edituserstories.component';
import { DeleteeuserstoriesComponent } from './userstories/deleteeuserstories/deleteeuserstories.component';
import{ShowallprojecttaskComponent} from './projecttask/showallprojecttask/showallprojecttask.component';
import {CreateprojecttaskComponent} from './projecttask/createprojecttask/createprojecttask.component';
import { ProjecttaskComponent } from './projecttask/projecttask.component';
import {EditprojecttaskComponent}from './projecttask/editprojecttask/editprojecttask.component';
import {DeleteprojecttaskComponent}from './projecttask/deleteprojecttask/deleteprojecttask.component';
import { ManagercommentsComponent } from './managercomments/managercomments.component';
import { ShowallmanagerComponent } from './managercomments/showallmanager/showallmanager.component';
import { CreatemanagerComponent } from './managercomments/createmanager/createmanager.component';
import { EditmanagerComponent } from './managercomments/editmanager/editmanager.component';
import { DeletemanagerComponent } from './managercomments/deletemanager/deletemanager.component';


const routes: Routes =[
  {
    path:'home',
    component: HomeComponent,
    children: []
  },
 
  {
    path:'employee',
    component:EmployeeComponent,
    children:[{
      path:'showall',
      component:ShowallemployeeComponent,
      children:[]
    },
    {
      
      path:'create',
    component:CreateemployeeComponent,
    children: []
    },
    {
      path:'edit/:id',
      component:EditemployeeComponent,
      children:[]
    },    
    {
      path:'delete/:id',
      component:DeleteemployeeComponent,
      children:[]
    },
    {
      path:'',
      redirectTo:'/employee/showall',
      pathMatch :'full'
    }
    ]
  },
  {
    path:'project',
    component: ProjectComponent,
    children:[
      {
        path:'showallproject',
        component: ShowallprojectComponent,
        children:[]
      },
      {
        path:'create',
        component: CreateComponent,
        children:[]


      },
      {
        path:'edit/:id',
        component:EditprojectComponent,
        children:[]
      },
      {
        path:'delete/:id',
        component:DeletepprojectsComponent,
        children:[]
      },
      {
        path:'',
        redirectTo:'/project/showallproject',
        pathMatch :'full'
      }
    ]
  },
  {
    path:'userstories',
    component:UserstoriesComponent,
    children:[
      {
        path:'showall',
        component: ShowalluserstoriesComponent,
        children:[]
 
      },
      {
        path:'create',
        component: CreateuserstoriesComponent,
        children:[]
 
      },
      {
        path:'edit/:id',
        component: EdituserstoriesComponent,
        children:[]
      },
      {
        path:'delete/:id',
        component: DeleteeuserstoriesComponent,
        children:[]
      },
      {
        path:'',
        redirectTo:'/userstories/showall',
        pathMatch :'full'
      }
      
    ]
  },
  {
    path:'projecttask',
    component:ProjecttaskComponent,
    children:[
  
    {
      path:'showall',
      component: ShowallprojecttaskComponent,
      children:[]
    },
    {
      path:'create',
      component: CreateprojecttaskComponent,
      children:[]
 

    },
    {
      path:'edit/:id',
      component: EditprojecttaskComponent,
      children:[]
 

    },
    {
      path:'delete/:id',
      component: DeleteprojecttaskComponent,
      children:[]
 

    },
    {
      path:'',
      redirectTo:'/projecttask/showall',
      pathMatch :'full'
    }
    ]
    },
    {
      path:'managercomments',
      component:ManagercommentsComponent,
      children:[
      {
        path:'showall',
        component:ShowallmanagerComponent,
        children:[]
         
      },
      {
        path:'create',
        component:CreatemanagerComponent,
        children:[]
        
      },
      {
        path:'edit/:id',
        component:EditmanagerComponent,
        children:[]
       

      },
      {
        path:'delete/:id',
        component:DeletemanagerComponent,
        children:[]
      }

      
      ]
    },
      {
        path:'',
        redirectTo:'home/showall',
        pathMatch :'full'
      }
    


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule], 
  
  declarations: []
})
export class AppRoutingModule { }
