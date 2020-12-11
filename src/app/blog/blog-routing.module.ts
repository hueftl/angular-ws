import { BlogSingleComponent } from './blog-single/blog-single.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const blogRoutes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: '',
        component: BlogListComponent
      },
      {
        path: ':id', // url path parameter
        component: BlogSingleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(blogRoutes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
