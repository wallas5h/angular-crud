import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { UserMasterService } from "../Service/user-master.service";
import { UserResponseEntity } from "../types/auth.dto";
declare let alertify: any;

@Component({
  selector: "app-modalpopup",
  templateUrl: "./modalpopup.component.html",
  styleUrls: ["./modalpopup.component.scss"],
})
export class ModalpopupComponent implements OnInit {
  constructor(
    private masterService: UserMasterService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ModalpopupComponent>
  ) {}

  ngOnInit(): void {
    this.getAllRole();
    this.getExistData();
  }

  roleData: any[] = [];
  saveData: any;
  editData: UserResponseEntity = {
    _id: "",
    email: "",
    role: "",
    isActive: false,
  };

  updateForm = new FormGroup({
    _id: new FormControl({ value: "", disabled: true }),
    email: new FormControl(""),
    role: new FormControl("", Validators.required),
    isActive: new FormControl(true),
  });

  updateUser() {
    console.log(this.updateForm.valid);
    // this.masterService.updateUser(this.updateForm.value, this.data.id);
    if (this.updateForm.valid) {
      this.masterService
        .updateUser(this.updateForm.getRawValue(), this.data.id)
        .subscribe((item) => {
          this.saveData = item;
          if (this.saveData.result === "pass") {
            alertify.success("Updated successfully.");
            this.ref.close();
          } else {
            alertify.error("Updated failed");
          }
        });
    }
  }

  getAllRole() {
    this.masterService.getAllRoles().subscribe((item) => {
      if (!item) return;
      const items = String(item);
      this.roleData = items.split(",");
    });
  }

  getExistData() {
    this.masterService.getUserById(this.data.id).subscribe((item) => {
      const user: any = item;
      this.editData = {
        _id: user._id,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
      };
      if (user) {
        this.updateForm.setValue({
          _id: user._id,
          email: user.email,
          role: user.role,
          isActive: user.isActive,
        });
      }
    });
  }

  closeDialogWindow() {
    this.ref.close();
  }
}
