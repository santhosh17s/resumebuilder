import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../@core/data/authentication.service';
import { AlertService } from '../../../@core/data/alert.service';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { LogUser } from '../../../@core/data/log-user.service';

export interface admin {
   username: string,
   password: string,
   remember: boolean
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: admin[] = [];
  loginForm: FormGroup;
  private loginMessage: Boolean = true;
  private returnUrl: string;

  

  constructor(private logInfo:LogUser, private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private auth: AuthenticationService, private alertService: AlertService) { 

  }

  ngOnInit() {

    // reset login status
    this.auth.logout();
    this.logInfo.changeLogInfo(null);


    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    //LOGIN FORM - REACTIVE FORM
    this.loginForm = this.fb.group({
       userName: new FormControl('santhosh@gmail.com', Validators.required),
       password: new FormControl('santhosh'),
       remember: new FormControl()
     })

  }

  OnFormSubmit(formValue) {
   
    //console.log("Login:",formValue.value[0].userName, formValue.value[0].password);
     this.auth.login(formValue.value.userName, formValue.value.password)
        .subscribe(
          data => { //console.log(data),
                    this.router.navigate([this.returnUrl])},
          error => { this.alertService.error(error); }
      ); 
  }

  closeAlert(){
      this.loginMessage = false;
  }

}
