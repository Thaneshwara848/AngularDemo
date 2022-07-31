import { Component, OnInit } from '@angular/core';
import { MydemoserviceService } from '../mydemoservice.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {

  constructor(private  db:MydemoserviceService) { }

  ngOnInit(): void {
  }
  c(){
    // console.log("100 lines of code to connecty DB logic ")
    this.db.dbLogic()
  }
}
