import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { PackgesPageComponent } from './packages/packges-page/packges-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'packages', component: PackgesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
