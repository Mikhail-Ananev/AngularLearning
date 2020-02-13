import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { BreadcrumbComponent } from './main/breadcrumb/breadcrumb.component';
import { ContentComponent } from './main/content/content.component';
import { SearchComponent } from './main/content/search/search.component';
import { ItemsListComponent } from './main/content/items-list/items-list.component';
import { ItemComponent } from './main/content/items-list/item/item.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainComponent, BreadcrumbComponent, ContentComponent, SearchComponent, ItemsListComponent, ItemComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
