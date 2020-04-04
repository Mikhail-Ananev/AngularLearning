import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthGuard } from './guards/auth.guard';
import { AddEditItemComponent } from './components/add-edit-item/add-edit-item.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Course',
    canActivate: [AuthGuard]
  },
  {
    path: 'Course',
    component: ContentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Course/New',
    component: AddEditItemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Course/:id',
    component: AddEditItemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Login',
    component: AuthenticationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
