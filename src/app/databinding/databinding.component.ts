import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abc(){
      console.log("Hi Just to Check ...!")
  }

  name="Thanesh";
  company="SIMPLY LEARN ";
  mychoice=false; 
  myimage="../../assets/slimg1.jpg";
}
