import { Router } from '@angular/router';
import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-kid',
  imports: [],
  templateUrl: './kid.component.html',
  styleUrl: './kid.component.scss'
})
export class KidComponent {
  constructor(
    private Router:Router,
  ){}

  notify = output<any>();//宣告事件

  send(acc:string, pass:string, add:string){
    this.notify.emit({acc, pass, add});
  }


}
