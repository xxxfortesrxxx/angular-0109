import { Component } from '@angular/core';
import { KidComponent } from "../kid/kid.component";

@Component({
  selector: 'app-dad',
  imports: [KidComponent],
  templateUrl: './dad.component.html',
  styleUrl: './dad.component.scss'
})
export class DadComponent {

  father(msg:string){
    console.log(msg);
  }

}
