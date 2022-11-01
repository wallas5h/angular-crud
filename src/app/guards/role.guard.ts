import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../Service/user.service";

declare let alertify: any;

@Injectable({
  providedIn: "root",
})
export class RoleGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.userService.getRole() === "admin") {
      return true;
    } else {
      alertify.error("No authorization");
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
