import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../Materia-Module";
import { AccessRoutingModule } from "./access-routing.module";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AccessRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class AccessModule {}
