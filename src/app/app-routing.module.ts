import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrypageComponent } from './entrypage/entrypage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
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
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
