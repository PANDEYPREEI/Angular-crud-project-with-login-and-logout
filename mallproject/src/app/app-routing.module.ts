import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  {path :'', redirectTo:'login' ,pathMatch:'full'},
 {path : 'login',component : UserLoginComponent},

{path : 'signup' ,component: UserSignupComponent},

{path : 'dash', component: UserDashboardComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }