import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const token =
  'BQDinfbi8OE-V8kYElm1yZUBUfFG3elGi5_afp4vQ7pnYCe47qrVy9RtITFetx8LUK8GFVfsEKFAu1l8I8r6HDebaBEUkYj-2uyI0NWVq4ywGtYI_BqL-dPjLUn3ZW9TE7yF0VADRmGua6pPUWtyjv3pqELL-EzG2YJveXw31PbR7YXkUY-ihQlFtCPZI4cmEIyGQPRhvjG8syRmppBdTne20UsPVlXVZUZDzxZy1C-5FDI4Yrzfes5Ga9O7zpBY0SL7HKAzlOnTsBHvyjNZLXnMIN2JrbNug1hMvwpq';
@Injectable()
export class SpotifyAuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(modifiedReq);
  }
}
