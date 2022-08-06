import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyinfopassService {

  constructor() { }

  myfullname:any;
  mydata(name:any)
  {
      console.log("name :"+name);
      this.myfullname=name;
  }

}
