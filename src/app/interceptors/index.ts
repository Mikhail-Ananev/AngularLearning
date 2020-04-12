import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpsInterceptor } from './http.interceptor';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpsInterceptor,
    multi: true
  }
];
