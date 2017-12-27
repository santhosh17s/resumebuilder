import { NgModule } from "@angular/core";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";


@NgModule({
  declarations:[
      AuthComponent,
      LoginComponent,
      RegisterComponent
  ],
  imports:[
    AuthRoutingModule,
    RouterModule
  ]
})
export class AuthModule{

}