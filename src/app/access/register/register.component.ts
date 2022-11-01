import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/Service/user.service";
import { UserRegisterDto2 } from "src/app/types/auth.dto";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  form: UserRegisterDto2 = {
    email: "",
    password: "",
    confirmPassword: "",
    role: "guest",
    isActive: false,
  };

  isPasswordsMatch = false;

  reactiveForms = new FormGroup({
    email: new FormControl(
      "",
      Validators.compose([Validators.email, Validators.email])
    ),
    password: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", Validators.required),
  });

  checkPasswordMatch() {
    if (
      this.reactiveForms.value.password ===
      this.reactiveForms.value.confirmPassword
    ) {
      console.log("password match");
      this.isPasswordsMatch = true;
    }
    return this.isPasswordsMatch;
  }

  async createUser() {
    this.checkPasswordMatch();

    if (this.reactiveForms.valid && this.isPasswordsMatch) {
      await this.userService.register({
        email: String(this.reactiveForms.value.email),
        password: String(this.reactiveForms.value.password),
      });
    } else {
      alert("Invalid form data");
      return;
    }
  }

  constructor(private userService: UserService, private route: Router) {}

  ngOnInit(): void {}

  redirectLogin() {
    this.route.navigate(["/login"]);
  }
}
