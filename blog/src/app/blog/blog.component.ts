import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blogService: BlogService) { }
  posts: any[]

  ngOnInit() {
    this.posts = this.blogService.posts
    console.log(this.posts)
  }

}
