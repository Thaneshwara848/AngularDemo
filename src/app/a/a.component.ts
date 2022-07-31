import { Component, OnInit } from '@angular/core';
import { MydemoserviceService } from '../mydemoservice.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private db:MydemoserviceService) { }

  ngOnInit(): void {
  }

  a(){
    // console.log("100 lines code DB logic ")
    this.db.dbLogic()
    this.db.abc()
  }
}
