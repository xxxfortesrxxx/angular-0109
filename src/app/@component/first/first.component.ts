import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExampleService } from '../../@service/example.service';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  constructor(
    private router:Router,
    private exampleService:ExampleService
  ){}



  getFirstData!:{
    account:string,
    password:string
  }

  ngOnInit(): void {
    this.getFirstData = this.exampleService.globalData;
  }




}
