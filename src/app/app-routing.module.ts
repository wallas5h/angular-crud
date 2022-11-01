import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AddContactComponent } from "./contact/add-contact/add-contact.component";
import { ContactComponent } from "./contact/contact.component";
import { EditContactComponent } from "./contact/edit-contact/edit-contact.component";
import { AuthGuard } from "./guards/auth.guard";
import { RoleGuard } from "./guards/role.guard";
import { HomeComponent } from "./home/home.component";
import { StatusComponent } from "./status/status.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "about", component: AboutComponent, canActivate: [AuthGuard] },
  { path: "user", component: UserComponent, canActivate: [RoleGuard] },

  // { path: "user", component: UserComponent },
  {
    path: "contact",
    component: ContactComponent,
    children: [
      { path: "add", component: AddContactComponent },
      { path: "edit/:id", component: EditContactComponent },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: "access",
    loadChildren: () =>
      import("./access/access.module").then((opt) => opt.AccessModule),
  },
  {
    path: "login",
    loadComponent: () =>
      import("./login/login.component").then((opt) => opt.LoginComponent),
  },
  { path: "**", component: StatusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
