import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { MaterialModule } from "../Materia-Module";
import { UserService } from "../Service/user.service";
import { UserLoginDto } from "../types/auth.dto";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private route: Router) {}

  ngOnInit(): void {
    localStorage.clear();
  }

  form: UserLoginDto = {
    email: "",
    password: "",
  };

  respData: any;

  async proceedLogin(data: UserLoginDto) {
    await this.userService.proceedLogin(data);
  }

  redirectRegister() {
    this.route.navigate(["/access/register"]);
  }
}
