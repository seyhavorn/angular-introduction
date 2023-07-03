import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { exhaustMap, take } from 'rxjs/operators';
import { ProjectAuthService } from './project-auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: ProjectAuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          // params: new HttpParams().set('auth', user.token)
          params: new HttpParams().set('auth', 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImY5N2U3ZWVlY2YwMWM4MDhiZjRhYjkzOTczNDBiZmIyOTgyZTg0NzUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbmctcmVjaXBlLWNvdXJzZS05MmIwNSIsImF1ZCI6Im5nLXJlY2lwZS1jb3Vyc2UtOTJiMDUiLCJhdXRoX3RpbWUiOjE2ODgzNzIzNzIsInVzZXJfaWQiOiIxRGhod3F4d0d0YVZCZlYyanZkWmFpandReEEzIiwic3ViIjoiMURoaHdxeHdHdGFWQmZWMmp2ZFphaWp3UXhBMyIsImlhdCI6MTY4ODM3MjM3MiwiZXhwIjoxNjg4Mzc1OTcyLCJlbWFpbCI6IjA2NjMzMzE3MkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiMDY2MzMzMTcyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.E9IFZ3qmtItRC_Xj65jz0gCOevRCBRccq3Il6-ZKxRPWnoMxn4HJghAXH38_VOskJ89sPRxggi5e5f8BHceXicAEr37ocaMZy0YUkOVd2rS1OutYYK3RntcWJ4veMAOBY-iSXTJpi3jcQpacUlUT56TPRbC9-tVe27jm8pOuXpOJMz4xXaxcaBdc48UH9UogMp09D41MgxW5caXWTdsXpwZjBA_hY3dDqg4UbKEruqgtbAJh9DugdE7PBOx2WN4-aOa3cwI8G8JS26r0kgXOcqOUHAavez0xBuA8cflAKh5vI8moHj3Z7r742vQzLT5pZNsgbJZDQvDUyZR4EQXghA')
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
