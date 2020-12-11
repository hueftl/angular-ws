import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/services/blog/blog.interface';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss']
})
export class BlogSingleComponent implements OnInit {

  private id: string = '';

  blogPost: Post = <Post>{};

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService) {
    this.activatedRoute.params.subscribe(urlParams => {
      this.id = urlParams.id;
      console.log(this.id);
    });
  }

  ngOnInit(): void {
    this.loadSingle(this.id);
  }

  loadSingle(id: string): void {
    this.blogService.getSingle(id).subscribe(blogPost => this.blogPost = blogPost);
  }

}
