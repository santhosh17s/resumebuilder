import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { User } from '../../model/user.model';
import { AlertService } from '../../@core/data/alert.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  user: User;

  constructor(private alertService: AlertService) { 
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
    console.log("welcome"); 
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
