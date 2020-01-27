import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  
  url:string="http://192.168.13.112:9090/register"

  constructor(private formBuilder: FormBuilder, private router: Router, private http:HttpClient) { }

  onRegister(){
    let passengerGender: string = this.registrationForm.controls.passengerGender.value;
    console.log(passengerGender);
    
    alert('Submit');
    if(this.registrationForm.invalid){
      return;
    }
    this.http.post(this.url, this.registrationForm.value).subscribe(data=>{
    })
    this.router.navigateByUrl('/loginuser');
    
  }
  ngOnInit() {
    this.registrationForm=this.formBuilder.group({
       passengerName:['',Validators.required],
       passengerEmail:['',Validators.required],
       passengerPhoneNumber:[''],
       passengerAge:[''],
       passengerGender:[''],  
       password:['',Validators.required]
    })
  }

}
