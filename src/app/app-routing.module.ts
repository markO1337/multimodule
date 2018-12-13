import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

const secondaryRoutes: Routes = [
  { path: 'login',  component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(secondaryRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
