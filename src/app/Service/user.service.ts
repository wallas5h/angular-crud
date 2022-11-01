import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { createUserRegisterDto, UserLoginDto } from "../types/auth.dto";

declare let alertify: any;

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient, private route: Router) {}

  apiUrl = "http://localhost:3001/api/users";

  isAuthenticated: boolean = false;
  respData: any;

  async proceedLogin(user: UserLoginDto) {
    try {
      await this.http.post(`${this.apiUrl}/login`, user).subscribe((res) => {
        this.respData = res;

        if (res) {
          localStorage.setItem("token", this.respData.token);
          this.route.navigate(["/"]);
          this.isAuthenticated = true;
          alertify.success("Success login");
          if (!this.respData.token) {
            alertify.error("Login failed");
          }
        } else {
          alertify.error("Login failed");
        }
      });
    } catch (error) {
      alertify.error("Login failed");
    }
  }

  async logout() {
    const token = this.getToken();

    try {
      await this.http
        .post(`${this.apiUrl}/logout`, {
          // headers.append('Authorization', 'Bearer ' + token),
          setHeaders: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .subscribe((res) => {
          this.respData = res;

          if (this.respData.message) {
            this.route.navigate(["/"]);
            alertify.success("Success logout");
          } else {
            alertify.error("Logout failed");
          }
        });
      localStorage.clear();
      this.isAuthenticated = false;
    } catch (error) {
      alertify.error("Logout failed");
    }
  }
  async register(user: createUserRegisterDto) {
    await this.http.post(`${this.apiUrl}/signup`, user).subscribe((res) => {
      this.respData = res;

      if (res) {
        localStorage.setItem("token", this.respData.token);
        this.route.navigate(["/"]);
        this.isAuthenticated = true;

        if (!this.respData.token) {
          alertify.error("Register failed");
        }
      } else {
        alert("Register failed");
      }
    });
  }

  getToken() {
    return localStorage.getItem("token") ? localStorage.getItem("token") : null;
  }

  getRole() {
    let token = localStorage.getItem("token");

    if (token != null) {
      const helper = new JwtHelperService();
      const extractData = helper.decodeToken(token);
      return extractData.role;
    } else {
      return "";
    }
  }
}
