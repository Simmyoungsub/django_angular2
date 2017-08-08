import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpTestComponent } from './http-test/http-test.component';

import { HttpTestService } from './http-test/http-test.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HttpTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [HttpTestService, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
