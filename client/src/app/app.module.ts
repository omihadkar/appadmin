import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert.component';
import { routing } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './homepage/homepage.component'
import {AppComponent} from './app.component'
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {JwtModule} from '@auth0/angular-jwt';

export function  tokenGetter()
{
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent    ,
    AppComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule, FormsModule,ReactiveFormsModule,
    HttpModule,HttpClientModule,
    JwtModule.forRoot({
      config:{ 
      tokenGetter: tokenGetter,
      whitelistedDomains: [],
      blacklistedRoutes: []}
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
