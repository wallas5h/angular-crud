import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ModalpopupComponent } from "../modalpopup/modalpopup.component";
import { UserMasterService } from "../Service/user-master.service";
import { UserModel } from "../types/auth.dto";

declare let alertify: any;

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ["id", "email", "role", "isActive", "Action"];

  usersDetail: any;
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private userMasterService: UserMasterService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.userMasterService.getAllUsers().subscribe((item) => {
      this.usersDetail = item;
      this.dataSource = new MatTableDataSource<UserModel>(this.usersDetail);
      this.dataSource.paginator = this.paginator;
    });
  }

  FunctionUpdate(id: string) {
    // this.userMasterService.updateUser(id);
    let popup = this.dialog.open(ModalpopupComponent, {
      width: "400px",
      // height: "500px",
      exitAnimationDuration: "500ms",
      enterAnimationDuration: "500ms",
      data: {
        id,
      },
    });

    popup.afterClosed().subscribe((item) => {
      this.getAllUser();
    });
  }

  FunctionDelete(id: string) {
    alertify.confirm(
      "User delete",
      "Confirm to delete user",
      () => {
        this.userMasterService.removeUserById(id).subscribe((item) => {
          this.getAllUser();
        });
      },
      function () {}
    );
  }
}
