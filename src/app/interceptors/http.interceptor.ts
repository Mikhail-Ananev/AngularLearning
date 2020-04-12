import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TOKEN_NAME } from '../models/const';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      const token = localStorage.getItem(TOKEN_NAME);
      req = req.clone({ headers: req.headers.set(TOKEN_NAME, token) });

      return next.handle(req);
  }
}
