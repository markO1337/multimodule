import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TestLayoutComponent} from './layouts/test-layout.component';

const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'test',  component: TestLayoutComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
