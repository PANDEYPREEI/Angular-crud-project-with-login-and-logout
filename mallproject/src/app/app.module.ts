import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserSignupComponent } from './user-signup/user-signup.component';



@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    RegisterComponent,
    HomeComponent,
    UserDashboardComponent,
    UserSignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
