import { NgModule } from "@angular/core";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations:[
      AuthComponent,
      LoginComponent,
      RegisterComponent,
  ],
  imports:[
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AuthModule{

}