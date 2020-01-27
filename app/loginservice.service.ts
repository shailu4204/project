import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  baseurl:string="http://192.168.13.112:9090/credentials/";
  constructor(private http:HttpClient) { }

  loginUser(credential: any){
    alert(this.baseurl);
    this.http.get(this.baseurl+credential.username+"/"+credential.password, credential).subscribe(data=>{
      alert(JSON.stringify(data));
      
    })
  }
}
