import { BlogService } from './../../services/blog/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts: any[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.loadBlogPost();
  }

  loadBlogPost(): void {
    this.blogService.getList().subscribe(blogPosts => this.blogPosts = blogPosts);
  }
}
