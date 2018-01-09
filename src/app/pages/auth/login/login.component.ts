import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../@core/data/authentication.service';
import { AlertService } from '../../../@core/data/alert.service';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { Subject } from 'rxjs';

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

  //private _success = new Subject<string>();
  private loginMessage: Boolean = true;

  //@Input() dismissible: boolean = false;

  constructor(private fb: FormBuilder, private auth: AuthenticationService, private alertService: AlertService) { 

  }

  ngOnInit() {
    //LOGIN FORM - REACTIVE FORM
    this.loginForm = this.fb.group({
       userName: new FormControl('', Validators.required),
       password: new FormControl(),
       remember: new FormControl()
     })

  }

  OnFormSubmit(formValue) {
    console.log(formValue.userName, formValue.password);
    this.auth.login(formValue.userName, formValue.password)
        .subscribe(
          data => console.log(data),
          error => { this.alertService.error(error); }
      );
  }

  closeAlert(){
      this.loginMessage = false;
  }

}
