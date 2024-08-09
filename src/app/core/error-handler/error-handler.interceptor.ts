import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError, of, tap } from 'rxjs';
import { StarterRoutesConfig } from '../../starter/starter-routes.config';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router: Router = inject(Router);
  const messageService: MessageService = inject(MessageService);

  return next(req).pipe(
    tap(a => console.log(a)),
    catchError(e => {
      if (e instanceof HttpErrorResponse) {
        messageService.add({
          severity: 'error',
          summary: 'Http request error',
          detail: e.message,
        });

        router.navigateByUrl('/starter/' + StarterRoutesConfig.PAGES_ERROR);
      }
      console.log(e);
      return of(e);
    })
  );
};
