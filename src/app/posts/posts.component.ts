import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../models/post.model';
import { PostService } from './post.service';
@Component({
  selector: 'app-post',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];
  
  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe( data => {
        this.posts = data;
      });
  };

  deletePost(post: Post): void {
    this.postService.deletePost(post)
      .subscribe( data => {
        this.posts = this.posts.filter(u => u !== post);
      })

     this.router.navigate(['posts']);
  };

  /*editPost(post: Post): void {

    localStorage.removeItem("editablePost");
    localStorage.setItem("editablePost", JSON.stringify(post));
    this.router.navigate(['edit']);
   
  };*/

}
