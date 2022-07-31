import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name="Thanesh is java Full Stack trainer";

  todaydate = new Date();
  amount=123456789;

  obj ={name:"Thanesh",Age :25};
}
