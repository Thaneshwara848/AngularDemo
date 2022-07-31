import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databindingproj',
  templateUrl: './databindingproj.component.html',
  styleUrls: ['./databindingproj.component.css']
})
export class DatabindingprojComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name="Thanesh";
  emi:any=0;
  total:any=0;
  intrest=0;
  caculate(principle:any,time:any ,intrest:any)
  {
    console.log("priciple :"+principle)
    console.log("TIme :"+time);
    console.log("Intrest :"+intrest);
    this.emi = (principle * time * intrest ) / 100; 
    this.total= parseInt(principle) + parseInt (this.emi);
  }
  changeWebsite(e:any) {
    if(e.target.value=="home")
    {
      this.intrest=8;
    }
    else if(e.target.value=="car")
    {
      this.intrest=6;
    }
    else if(e.target.value=="personal")
    {
      this.intrest=12;
    }
    else if(e.target.value=="edu"){
      this.intrest=5;
    }
  }

  mydata="Thanesh";


}
