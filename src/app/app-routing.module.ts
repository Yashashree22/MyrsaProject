import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'list', component:EmployeelistComponent
  },
  {
    path:'add', component:AddEmpComponent
  },{
    path:'update/:id', component:UpdateEmpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
