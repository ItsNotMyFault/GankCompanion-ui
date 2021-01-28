import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpParams,
    HttpHeaders,
    HttpErrorResponse
} from '@angular/common/http';
import { take, exhaustMap, catchError } from 'rxjs/operators';

import { EMPTY, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class CorsInterceptorService implements HttpInterceptor {
    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const headersss = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            'Access-Control-Allow-Methods': 'PUT, POST, GET, OPTIONS'
        })

        const cloneRequest = req.clone({ headers: headersss });
        return next.handle(cloneRequest).pipe(
            catchError((error: HttpErrorResponse) => {
                this.router.navigate(['nopartyfound']);
                return EMPTY;
            })
        );

    }
}

