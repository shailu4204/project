import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from '@angular/common/http';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  loginForm: FormGroup;
  password: string;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  result:any;
  // url:string="http://192.168.13.112:9090/credentials/"
  constructor(private formBuilder: FormBuilder,private router: Router,private http:HttpClient, private loginserviceService:LoginserviceService ) { }

  onSubmit(){
    this.submitted = true;
    let credential = {"username": this.loginForm.controls.username.value, "password":this.loginForm.controls.password.value};
    
      if(this.loginForm.invalid){
        return;
      }
      alert(JSON.stringify(credential));
        //this.loginserviceService.loginUser()
        this.loginserviceService.loginUser(credential);
        this.router.navigate(['search']);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username : ['admin', Validators.required],
      password :['admin', Validators.required]
    });
  }
}
