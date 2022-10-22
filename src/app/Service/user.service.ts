import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UserLoginDto } from "../types/auth.dto";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient, private route: Router) {}

  apiUrl = "http://localhost:3001/api/auth";

  isAuthenticated: boolean = false;
  respData: any;

  async proceedLogin(user: UserLoginDto) {
    return await this.http
      .post(`${this.apiUrl}/login`, user)
      .subscribe((res) => {
        this.respData = res;

        if (res) {
          localStorage.setItem("token", this.respData.tokens.accessToken);
          this.route.navigate(["/"]);
          this.isAuthenticated = true;
        } else {
          alert("Login failed");
        }
      });
  }

  async logout() {
    const token = localStorage.getItem("token");

    await this.http
      .post(`${this.apiUrl}/logout`, {
        // headers.append('Authorization', 'Bearer ' + token),
        headers: {
          Authorization: `Bearer Token: ${token}`,
        },
      })
      .subscribe((res) => {
        this.respData = res;

        if (res) {
          console.log("działa");
          this.route.navigate(["/"]);
        } else {
          alert("Logout failed");
        }
      });
    localStorage.clear();
    this.isAuthenticated = false;
  }
}
