import { NgModule } from '@angular/core';
import { AppHttpComponent } from './app-http/app-http.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorService } from './http-service/auth-interceptor.service';
import { HttpPostService } from './http-service/httpPostService.service';
import { LoginInterceptorService } from './http-service/login-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AppHttpComponent, HttpRequestComponent],
  imports: [CommonModule, FormsModule],
  providers: [
    HttpPostService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  exports: [AppHttpComponent, HttpRequestComponent],
})
export class HttpModule {}
