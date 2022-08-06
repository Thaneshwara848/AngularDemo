import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc2',
  templateUrl: './abc2.component.html',
  styleUrls: ['./abc2.component.css']
})
export class ABC2Component implements OnInit,OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    console.log("Hi ABC2  Destroied ....!")
  }

  ngOnInit(): void {
    console.log("HI Im from abc2 COMPONENT ")
  }

}
