import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  CheckboxControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  PatternValidator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signinform !: FormGroup;

  //login
  public loginform !: FormGroup;
  isSignSubmitted!: boolean;
  isLoginSubmitted!: boolean;
  public ischecked!: boolean;
  

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.ischecked = true;
    this.signinform=this.formBuilder.group({
      fullname:[
          '',
          Validators.compose([
          Validators.pattern('[a-zA-z ]*'),
          Validators.required,
        ]),
      ],
      email:[
          '',
          Validators.compose([
          Validators.pattern(
            '^[a-z0-9A-Z._%+-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,4}$'
          ),
          Validators.required,
          ]),
      ],
      password:[
          '',
          Validators.compose([
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z/d$@$!%*?&].{8,}'
          ),
          Validators.required,
        ]),
      ]
    })


    //login
    this.loginform=this.formBuilder.group({
      email:[ 
        '',
        Validators.compose([
        Validators.pattern(
          '^[a-z0-9A-Z._%+-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,4}$'
        ),
        Validators.required,
        ]),
      ],
      password:[
        '',
          Validators.compose([
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z/d$@$!%*?&].{8,}'
          ),
          Validators.required,
        ]),
      ]
    })
    
  }
  
  get errorControlS() {
    return this.signinform.controls;
  }

  get errorControll() {
    return this.loginform.controls;
  }

  signIn(){
    this.isSignSubmitted= true;
  }

  logIn(){
    this.isLoginSubmitted = true;
  }

  isMitaoe(){
    // console.log(this.signinform.value.email);
    // if(this.signinform.value.email.pattern == "tpgavkhare@mitaoe.ac.in"){
    //   console.log("Gotcha");
    // }
    if(this.signinform.value.email.substr(-13,) == "@mitaoe.ac.in"){
      console.log("Gotcha");
      this.ischecked = true;
      return true;
    }
    if(this.ischecked == true){
       this.ischecked = false;
       return false;
    }
    else{
      this.ischecked = true;
      return true;
    }
    // console.log(this.ischecked)
  }
}
