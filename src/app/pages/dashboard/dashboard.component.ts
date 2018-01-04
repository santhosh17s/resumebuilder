import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;

  constructor() { 
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

    
  }

  userSubmit() {
    
  }

   
    
}
