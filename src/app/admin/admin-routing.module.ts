import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const adminRoutes: Routes = [
  {    
    path: '',    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]})
    export class AdminRoutingModule { }