import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { routingComponent } from './app-routing.module';

import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { HomeService } from './home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [routingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
