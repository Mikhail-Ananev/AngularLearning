import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { httpInterceptorProviders } from './interceptors';

import { AppComponent } from './app.component';
import { AppComponents } from './components';

@NgModule({
  declarations: [
    AppComponent,
    AppComponents
  ],
  exports: [
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
