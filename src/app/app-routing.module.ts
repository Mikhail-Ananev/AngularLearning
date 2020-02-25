import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { ItemsListComponent } from './components/items-list/items-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Course'
  },
  {
    path: 'Course',
    component: [MainComponent]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [MainComponent];
