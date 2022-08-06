import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirictivedemo',
  templateUrl: './dirictivedemo.component.html',
  styleUrls: ['./dirictivedemo.component.css']
})
export class DirictivedemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  xyz=false;

  fruit=["Apple","Banana","Cherry","Kiwi","Orange","Graps"];
  addfriut(myfruit:any)
  {
    this.fruit.push(myfruit);
  }

  option=3000;
}

