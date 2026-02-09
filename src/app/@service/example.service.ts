import { Router } from '@angular/router';
import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(
    private router:Router
  ){}

  globalData!:{
    account:string,
    password:string
  };


  userName!:string;

  /*userName!:{
    acc:string,
    pass:string,
    address:string
  };*/



}
