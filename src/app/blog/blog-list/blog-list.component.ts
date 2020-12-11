import { BlogService } from './../../services/blog/blog.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './../../services/blog/blog.interface';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts$: Observable<Post[]> = new Observable();

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogPosts$ = this.blogService.getList();
  }
}
