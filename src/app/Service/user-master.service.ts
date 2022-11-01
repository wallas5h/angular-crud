import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserModel } from "../types/auth.dto";

@Injectable({
  providedIn: "root",
})
export class UserMasterService {
  apiUrl = "http://localhost:3001/api/users";

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiUrl + "/all");
  }

  getUserById(userId: any) {
    return this.http.get(`${this.apiUrl}/${userId}`);
  }

  removeUserById(userId: any) {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }

  updateUser(inputData: any, id: string) {
    return this.http.put(`${this.apiUrl}/${id}`, inputData);
  }

  getAllRoles() {
    return this.http.get(`${this.apiUrl}/roles`);
  }
}
