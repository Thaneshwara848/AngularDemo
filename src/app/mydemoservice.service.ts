import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MydemoserviceService {

  constructor() { }
 
  dbLogic(){
    console.log("im from service with 100 lines of code ")
  }

  abc(){
    console.log("100 lines of logic")
  }
}
