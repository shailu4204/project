import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  source:string[]=['--select--','Mumbai', 'Pune','Chennai','Hyderabad','Goa'];
  destination:string[]=['--select--','Mumbai','Pune','Chennai','Hyderabad','Goa']
  constructor(private router:Router) { }

  ngOnInit() {
  }
  loginUser(){
    this.router.navigate(['loginuser']);
  }
  registerUser(){
    this.router.navigate(['registration']);
  }
}
