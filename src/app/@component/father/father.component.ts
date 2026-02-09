import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ExampleService } from './../../@service/example.service';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-father',
  imports: [ FormsModule],
  templateUrl: './father.component.html',
  styleUrl: './father.component.scss'
})
export class FatherComponent {
  fathermessage:string = 'Hello';

  constructor(
    private router:Router,
    private exampleService: ExampleService
  ){}

  @Input() acc!:string;
  @Input() pass!:string;
  @Input() address!:string;

  /*getUserData!:{
    acc:string,
    pass:string,
    address:string
  }*/

  /*ngOnInit(): void {
    this.getUserData = this.exampleService.userName;
  }*/

}
