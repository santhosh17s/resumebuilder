import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  states: any = [
   { state:'Tamil Nadu', abbrev:'TN' },
   { state:'Andhra Predesh', abbrev:'AP' },
   { state:'Assam', abbrev:'AS' },
   { state:'Bigar', abbrev:'BR' },
   { state:'Karnataka', abbrev:'KA' },
   { state:'Gujarat', abbrev:'GJ' },
   { state:'Haryana', abbrev:'HA' },
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  
    //Validators.pattern('^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$')

     this.registerForm = this.fb.group({
          userName: new FormControl('', [Validators.required, Validators.minLength(8)]),
          password: new FormControl(''),
          address: new FormControl(''),
          city: new FormControl(),
          state: new FormControl(),
          zip: new FormControl()
     })

     this.registerForm.controls['state'].setValue(this.states[0], {onlySelf: true});

  }

}
