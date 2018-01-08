import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../@core/data/authentication.service';
import { AlertService } from '../../../@core/data/alert.service';

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


  constructor(private fb: FormBuilder, private auth: AuthenticationService, private alerService: AlertService) { 

  }

  ngOnInit() {
   
    this.loginForm = this.fb.group({
       userName: new FormControl('', Validators.required),
       password: new FormControl(),
       remember: new FormControl()
     })

  }

  OnFormSubmit(formValue) {
   //console.log(this.loginForm);
    this.auth.login(formValue.formValue, formValue.password)
        .subscribe(
          data => console.log(data),
          error => { this.alerService.error(error); }
      );
        
  }

}
