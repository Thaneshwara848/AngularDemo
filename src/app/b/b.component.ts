import { Component, OnInit } from '@angular/core';
import { MydemoserviceService } from '../mydemoservice.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private dbs:MydemoserviceService) { }

  ngOnInit(): void {
  }

  b(){
    this.dbs.dbLogic();
    // console.log("DB logic to connect 100 lines of code ")
  
  }
}
