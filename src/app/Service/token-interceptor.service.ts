import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TokenInterceptorService implements HttpInterceptor {
  token: string | null = "";

  constructor() {}

  ngOnInit(): void {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let jwttoken = req.clone({
      setHeaders: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    return next.handle(jwttoken);
  }
}
