import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, finalize, of, tap } from 'rxjs';
import { LoaderService } from './loader.service';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService: LoaderService = inject(LoaderService);

  return next(req).pipe(
    tap(() => {
      loaderService.show();
    }),
    finalize(() => {
      loaderService.hide();
    }),
    catchError(e => {
      if (e instanceof HttpErrorResponse) {
        loaderService.hide();
      }
      return of(e);
    })
  );
};
