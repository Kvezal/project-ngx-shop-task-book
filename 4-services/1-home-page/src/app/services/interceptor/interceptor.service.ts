import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {BASE_URL_TOKEN} from './config';
import {catchError, filter, map} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

export interface IRes<T> {
  data: T;
  error?: string;
}

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(@Inject(BASE_URL_TOKEN) private baseUrl: string) {
  }

  intercept<T extends IRes<T>>(req: HttpRequest<any>, next: HttpHandler): Observable<HttpResponse<T>> {
    const headers = req.headers
      .append('Content-Type', 'application/json');
    const jsonRequest = req.clone({
      url: `${this.baseUrl}${req.url}`,
      headers,
    });
    return next.handle(jsonRequest).pipe(
      filter((event: HttpEvent<IRes<T>>) => event instanceof HttpResponse),
      map((response: HttpResponse<IRes<T>>) => {
        return response.clone({
          body: response?.body?.data,
        });
      }),
      catchError(() => {
        return EMPTY;
      })
    );
  }
}
