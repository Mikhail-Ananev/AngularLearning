import { AddEditItemComponent } from './add-edit-item/add-edit-item.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HoursMinutesPipe } from '../pipes/hours-minutes.pipe';
import { InputDurationComponent } from './input-duration/input-duration.component';
import { IsItemFreshDirective } from '../directives/is-item-fresh.directive';
import { ItemComponent } from './item/item.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { LoadingComponent } from './loading/loading.component';
import { MainComponent } from './main/main.component';
import { NoPageComponent } from './no-page/no-page.component';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { SearchPanelComponent } from './search-panel/search-panel.component';

export const AppComponents = [
    AddEditItemComponent,
    AuthenticationComponent,
    BreadcrumbsComponent,
    ConfirmDeleteComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    HoursMinutesPipe,
    InputDurationComponent,
    IsItemFreshDirective,
    ItemComponent,
    ItemsListComponent,
    LoadingComponent,
    MainComponent,
    NoPageComponent,
    OrderByPipe,
    SearchPanelComponent,
  ];
