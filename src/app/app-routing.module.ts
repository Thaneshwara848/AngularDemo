import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABC1Component } from './abc1/abc1.component';
import { ABC2Component } from './abc2/abc2.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EntrypageComponent } from './entrypage/entrypage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'entry',
    component:EntrypageComponent
  },
  {
    path:'signup',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'abc1',
    component:ABC1Component
  },
  {
    path:"abc2",
    component:ABC2Component
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
