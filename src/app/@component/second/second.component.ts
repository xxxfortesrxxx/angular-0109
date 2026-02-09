import { Router } from '@angular/router';
import { ExampleService } from './../../@service/example.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second',
  imports: [FormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {

  constructor(
    private router:Router,
    private exampleService:ExampleService
  ){}

  account!: string;//帳號
  password!: string;//密碼


  logIn(){
    this.exampleService.globalData={
      account:this.account,
      password:this.password
    }
    this.router.navigate(['/first']);
  }



}
