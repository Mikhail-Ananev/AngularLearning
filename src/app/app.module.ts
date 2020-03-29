import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ContentComponent } from './components/content/content.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemComponent } from './components/item/item.component';
import { IsItemFreshDirective } from './directives/is-item-fresh.directive';
import { HoursMinutesPipe } from './pipes/hours-minutes.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AddEditItemComponent } from './components/add-edit-item/add-edit-item.component';
import { InputDurationComponent } from './components/input-duration/input-duration.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    ItemsListComponent,
    ItemComponent,
    MainComponent,
    SearchPanelComponent,
    IsItemFreshDirective,
    HoursMinutesPipe,
    OrderByPipe,
    ConfirmDeleteComponent,
    AuthenticationComponent,
    AddEditItemComponent,
    InputDurationComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
