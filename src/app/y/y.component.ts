import { Component, OnInit } from '@angular/core';
import { MyinfopassService } from '../myinfopass.service';

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.css']
})
export class YComponent implements OnInit {

  constructor(private serv:MyinfopassService) { }

  ngOnInit(): void {
  }
  myname=0;
  name(){
   this.myname=this.serv.myfullname;
  }

}
