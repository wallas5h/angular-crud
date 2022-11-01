import { Component } from "@angular/core";
import { UserService } from "./Service/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private userService: UserService) {}
  isAdmin: boolean = false;

  ngOnInit() {
    this.ngDoCheck();
  }

  isAuthenticated() {
    return this.userService.isAuthenticated;
  }
  logout() {
    this.userService.logout();
  }

  ngDoCheck() {
    if (this.userService.getRole() === "admin") {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }
}
