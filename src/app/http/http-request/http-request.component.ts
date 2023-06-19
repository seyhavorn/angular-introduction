import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpPostModel } from '../interface/http-post.model';
import { HttpPostService } from '../http-service/httpPostService.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'intro-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css'],
})
export class HttpRequestComponent implements OnInit, OnDestroy {
  loadedPosts: HttpPostModel[] = [];
  isFetching: boolean = false;
  error: any = null;
  private errorSub!: Subscription;

  constructor(
    private http: HttpClient,
    private httpPostService: HttpPostService
  ) {}

  ngOnInit() {
    this.errorSub = this.httpPostService.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });
    this.onFetchPosts();
  }

  onCreatePost(postData: HttpPostModel) {
    this.httpPostService.createAndStorePost(postData.title, postData.content);
    setTimeout(() => {
      this.onFetchPosts();
    }, 1000);
  }

  onFetchPosts() {
    //Send Http Request:
    this.isFetching = true;
    this.httpPostService.fetchPosts().subscribe(
      (post) => {
        this.isFetching = false;
        this.isFetching = false;
        this.loadedPosts = post;
      },
      (error) => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

  onClearPosts() {
    // Send Http request
    this.httpPostService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    console.log('here');
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
