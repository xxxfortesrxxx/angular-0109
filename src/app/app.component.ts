import { FatherComponent } from './@component/father/father.component';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { ExampleService } from './@service/example.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private router:Router,
    private exampleService:ExampleService,
    private activateRoute:ActivatedRoute
  ){}

  acc!: string;//帳號
  pass!: string;//密碼
  address!:string;


  /*signIn(){
    this.exampleService.userName={
      acc:this.acc,
      pass:this.pass,
      address:this.address
    }
    this.router.navigate(['/father']);
  }*/

}
