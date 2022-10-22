import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AboutComponent } from "./about/about.component";
// import { AccessRoutingModule } from "./access/access-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddContactComponent } from "./contact/add-contact/add-contact.component";
import { ContactComponent } from "./contact/contact.component";
import { EditContactComponent } from "./contact/edit-contact/edit-contact.component";
import { HomeComponent } from "./home/home.component";
import { MaterialModule } from "./Materia-Module";
import { StatusComponent } from "./status/status.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    StatusComponent,
    AddContactComponent,
    EditContactComponent,
  ],
  // imports: [BrowserModule, AppRoutingModule, AccessRoutingModule
  // ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
