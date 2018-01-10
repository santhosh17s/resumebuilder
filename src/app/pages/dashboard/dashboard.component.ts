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

  private user: User[];
  private currentUser: SystemUser;
  private loginName: string;
  private states: any = [
    { name:'Tamil Nadu', abbrev:'TN' },
    { name:'Andhra Predesh', abbrev:'AP' },
    { name:'Assam', abbrev:'AS' },
    { name:'Bigar', abbrev:'BR' },
    { name:'Karnataka', abbrev:'KA' },
    { name:'Gujarat', abbrev:'GJ' },
    { name:'Haryana', abbrev:'HA' },
   ]

  constructor(private logInfo: LogUser, private alertService: AlertService) { 

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.user = JSON.parse(localStorage.getItem('users'));

    console.log("Dashboard:", this.user[0])
    
    
    //console.log("Dashboard:",this.currentUser);
    
    /* this.user = {
      firstName : 'Santhosh',
      lastName : 'kumar',
      email : 'santhoshloud@gmail.com',
      address1 : 'address 1',
      address2 : 'address 2',
      city : 'Chennai',
      state : 'TN',
      zip : 600000
    }; */
  }

  ngOnInit() {
    
    if (this.currentUser != null )  {
      this.logInfo.changeLogInfo(this.currentUser.firstname );   
    } 
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
