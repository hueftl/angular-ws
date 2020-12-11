import { BlogRoutingModule } from './blog-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogSingleComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    UiModule
  ]
})
export class BlogModule { }
