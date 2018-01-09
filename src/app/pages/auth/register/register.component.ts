import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../@core/data/user.service';
import { AlertService } from '../../../@core/data/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  states: any = [
   { name:'Tamil Nadu', abbrev:'TN' },
   { name:'Andhra Predesh', abbrev:'AP' },
   { name:'Assam', abbrev:'AS' },
   { name:'Bigar', abbrev:'BR' },
   { name:'Karnataka', abbrev:'KA' },
   { name:'Gujarat', abbrev:'GJ' },
   { name:'Haryana', abbrev:'HA' },
  ]

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService, private alertService:AlertService) { }

  ngOnInit() {
  
    //Validators.pattern('^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$')

     this.registerForm = this.fb.group({
          username: new FormControl('', [Validators.required, Validators.email]),
          password: new FormControl('', [Validators.required, Validators.minLength(8)]),
          firstname: new FormControl(),
          lastname: new FormControl(),
          address: new FormControl(''),
          city: new FormControl(),
          state: new FormControl()
     })

     this.registerForm.controls['state'].setValue(this.states[0].name, {onlySelf: true});

  }

  submitRegister(submiRegForm){
   // console.log(submiRegForm.value);

    this.userService.create(submiRegForm.value)
        .subscribe( data => { 
                              this.alertService.success('Registration Successfull', true);
                              this.router.navigate(['/pages/login']);
                            },
                    error => {this.alertService.error(error)} );
  }


}
