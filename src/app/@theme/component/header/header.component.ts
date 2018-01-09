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
      console.log(this.currentUser);
    }
    
    ngOnInit() {

      this.logInfo.changeLogInfo(this.currentUser.firstname);   

      this.logInfo.currentLogInfo
                      .subscribe( msg => { 
                        this.loginName =  msg;
                        console.log(this.loginName) 
                      });

                  
      
    }

    logout() {
      
    }
    
    loginUserName(user) {
      this.userName = user;
    }
  }
  
  