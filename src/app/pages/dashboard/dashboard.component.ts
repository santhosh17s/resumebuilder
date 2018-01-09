import { Component, OnInit, OnDestroy, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../model/user.model';
import { AlertService } from '../../@core/data/alert.service';
import { SystemUser } from '../../@core/data/systemuser.service';
import { LogUser } from '../../@core/data/log-user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  user: User;
  //currentUser: SystemUser;
  //currentUser: SystemUser;

  //@Output() loginUserNameEvent:EventEmitter<string> = new EventEmitter<string>();

  constructor(private logInfo: LogUser, private alertService: AlertService) { 

    //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    //this.loginUserNameEvent.emit("sss");
    //this.currentUser = this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.user = {
      firstName : 'Santhosh',
      lastName : 'kumar',
      email : 'santhoshloud@gmail.com',
      address1 : 'address 1',
      address2 : 'address 2',
      city : 'Chennai',
      state : 'TN',
      zip : 600000
    };
  }

  ngOnInit() {
    //console.log("welcome"); 
  


  }

  ngAfterViewInit() {
    //Everything you need to know about the `ExpressionChangedAfterItHasBeenCheckedError` error
    //this.alertService.success("Welcome to Dashboard");
  }

  ngOnViewChanges() {

  }

  alertMessage() {
    this.alertService.success("Welcome to Dashboard");
  }

  userSubmit() {
    
  }

  ngOnDestroy() {

  }

   
    
}
