import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';

import { httpInterceptorProviders } from './interceptors';

import { AppComponent } from './app.component';
import { AppComponents } from './components';
import { appReducers } from './store/reducers/app.reducers';
import { CoursesEffects } from './store/effects/courses.effects';
import { UserEffects } from './store/effects/user.effects';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AppComponents,
  ],
  exports: [
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 5
     }),
    EffectsModule.forRoot([CoursesEffects, UserEffects]),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
