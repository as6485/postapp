import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Post } from '../models/post.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostService {
 
  constructor(private http:HttpClient) {}

  private postUrl = 'https://jsonplaceholder.typicode.com/posts';
 

  public getPosts() {
    return this.http.get<Post[]>(this.postUrl);
  }

  public getPost(postid) {
    return this.http.get<Post>(this.postUrl + "/"+ postid);
  }
 
  public deletePost(post) {
    return this.http.delete(this.postUrl + "/"+ post.id);
  }

  public createPost(post) {
    return this.http.post<Post>(this.postUrl, post);
  }

  public updatePost(post) {
    return this.http.patch<Post>(this.postUrl, post);
  }

}