import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc1',
  templateUrl: './abc1.component.html',
  styleUrls: ['./abc1.component.css']
})
export class ABC1Component implements OnInit,OnDestroy {

  constructor() { }
 
  ngOnInit(): void {
    console.log("HI Im from ABC 1 COMPONENT ")
  }
  ngOnDestroy(): void {
  console.log("Hi im ABC1 Destroied...!")
  }



}
