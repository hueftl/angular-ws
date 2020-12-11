import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BlogModule } from './blog/blog.module';

@NgModule({
  declarations: [ // components
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [ // modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BlogModule
  ],
  providers: [], // services, intercepter
  bootstrap: [AppComponent]
})
export class AppModule { }
