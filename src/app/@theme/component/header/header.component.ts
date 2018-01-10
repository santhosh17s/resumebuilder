import { Component, OnInit } from "@angular/core";
import { SystemUser } from "../../../@core/data/systemuser.service";
import { LogUser } from "../../../@core/data/log-user.service";


@Component({
    selector: 'ngx-header',
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html',
  })
  export class HeaderComponent implements OnInit { 

    userName: string;
    currentUser: SystemUser;
    loginName: string;

    constructor(private logInfo:LogUser){
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      console.log("Header Const: ",this.currentUser);
    }
    
    ngOnInit() {
   
      if (this.currentUser != null )  {
        this.logInfo.changeLogInfo(this.currentUser.firstname );   
      } 

      this.logInfo.currentLogInfo
                      .subscribe( msg => { 
                        this.loginName =  msg;
                        console.log("Changed from header comp", this.loginName) 
                      });
    }

    logout() {
      
    }
    
    loginUserName(user) {
      this.userName = user;
    }
  }
  
  