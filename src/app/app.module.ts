import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AboutComponent } from "./about/about.component";
// import { AccessRoutingModule } from "./access/access-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { JwtModule } from "@auth0/angular-jwt";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddContactComponent } from "./contact/add-contact/add-contact.component";
import { ContactComponent } from "./contact/contact.component";
import { EditContactComponent } from "./contact/edit-contact/edit-contact.component";
import { HomeComponent } from "./home/home.component";
import { MaterialModule } from "./Materia-Module";
import { ModalpopupComponent } from "./modalpopup/modalpopup.component";
import { TokenInterceptorService } from "./Service/token-interceptor.service";
import { StatusComponent } from "./status/status.component";
import { UserComponent } from "./user/user.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    StatusComponent,
    AddContactComponent,
    EditContactComponent,
    UserComponent,
    ModalpopupComponent,
  ],
  // imports: [BrowserModule, AppRoutingModule, AccessRoutingModule
  // ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    JwtModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
