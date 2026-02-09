import { ApiDemo1Component } from './@component/api-demo-1/api-demo-1.component';
import { SecondComponent } from './@component/second/second.component';
import { FirstComponent } from './@component/first/first.component';
import { Routes } from '@angular/router';
import { FatherComponent } from './@component/father/father.component';
import { ChildComponent } from './@component/child/child.component';
import { DadComponent } from './@component/dad/dad.component';
import { KidComponent } from './@component/kid/kid.component';
import { ArrayComponent } from './@component/array/array.component';

export const routes: Routes = [
  {path:'first', component:FirstComponent},
  {path:'second', component:SecondComponent},
  {path:'father', component:FatherComponent},
  {path:'child', component:ChildComponent},
  {path:'dad', component:DadComponent},
  {path:'kid', component:KidComponent},
  {path:'arr', component:ArrayComponent},
  {path:'api-1', component:ApiDemo1Component}
  //{path:'**'}
];
