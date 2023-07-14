import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(
      'https://klocknow-api.abitech.a2hosted.com/api/login',
      data,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Content-Language': 'en',
          'Access-Control-Allow-Origin': '*',
          'Authorization':
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2tsb2Nrbm93LWFwaS5hYml0ZWNoLmEyaG9zdGVkLmNvbS9hcGkvbG9naW4iLCJpYXQiOjE2ODkzMDMyOTYsImV4cCI6MTY4OTM4OTY5NiwibmJmIjoxNjg5MzAzMjk2LCJqdGkiOiJoNEFKTnp4Z0VFdGU5THZ2Iiwic3ViIjoxMjkxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.5mF1igVOmBDw_zaU018HQ9nKoTsQr83Bcu1tjzMmj5k',
        },
      }
    );
  }
}
