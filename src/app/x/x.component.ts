import { Component, OnInit } from '@angular/core';
import { MyinfopassService } from '../myinfopass.service';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent implements OnInit {

  constructor(private data:MyinfopassService) { }

  ngOnInit(): void {
  }

  abc(uname:any)
  {
    this.data.mydata(uname);
  }
}
