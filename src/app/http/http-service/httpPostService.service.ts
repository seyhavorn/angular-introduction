import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpPostModel } from '../interface/http-post.model';
import { map, catchError, tap  } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpPostService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}
  environment = environment.baseUrl + '/post.json';

  createAndStorePost(title: string, content: string) {
    const postData: HttpPostModel = { title: title, content: content };
    this.http.post<{ name: string }>(this.environment, postData, {
      observe: 'response'
    }).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        this.error.next(error.message);
      }
    );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'okje');
    searchParams = searchParams.append('customer','seyha')

    return this.http
      .get<{ [key: string]: HttpPostModel }>(this.environment, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          custom: 'Hello-sdfsdf',
        }),
        params: searchParams,
        responseType: 'json'
      })
      .pipe(
        map((responseData: { [key: string]: any }) => {
          const postsArray: HttpPostModel[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((error) => {
          // send to analytics server
          return throwError(error);
        })
      );
  }

  deletePosts() {
    return this.http.delete(this.environment, {
      observe: 'events',
      responseType: 'json'
    }).pipe(
      tap((event: any) => {
        console.log(event);
        if(event.type === HttpEventType.Sent) {
        }
        if(event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      })
    );
  }
}
