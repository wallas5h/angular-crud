import { Component } from "@angular/core";
import { UserService } from "./Service/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private userService: UserService) {}

  ngOnInit() {}

  isAuthenticated() {
    return this.userService.isAuthenticated;
  }
  logout() {
    this.userService.logout();
  }
}
