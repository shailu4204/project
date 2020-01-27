import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  source:string[]=['--select--','Mumbai', 'Pune','Chennai','Hyderabad','Goa'];
  destination:string[]=['--select--','Mumbai','Pune','Chennai','Hyderabad','Goa']
  constructor() { }

  ngOnInit() {
  }

}
