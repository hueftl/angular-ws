import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';

@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogSingleComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BlogComponent
  ]
})
export class BlogModule { }
