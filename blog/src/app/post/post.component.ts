import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/blog/blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  index
  id
  name

  ngOnInit() {
    this.index = this.route.params
    this.id = this.index.value.id
    this.name = this.blogService.getName(this.id)
  }

  setName(name){
    this.blogService.setName(this.id, name)
  }

}
