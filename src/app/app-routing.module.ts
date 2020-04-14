import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { AddEditItemComponent } from './components/add-edit-item/add-edit-item.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ContentComponent } from './components/content/content.component';
import { NoPageComponent } from './components/no-page/no-page.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Courses',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'Courses',
        canActivate: [AuthGuard]
      },
      {
        path: 'Courses',
        children: [
          {
            path: '',
            data: {
              breadcrumb: null,
            },
            component: ContentComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'New',
            data: {
              breadcrumb: 'New',
            },
            component: AddEditItemComponent,
            canActivate: [AuthGuard]
          },
          {
            path: ':id/:courseName',
            data: {
              breadcrumb: ':courseName',
            },
            component: AddEditItemComponent,
            canActivate: [AuthGuard]
          },
        ]
      },
      {
        path: 'Login',
        data: {
          breadcrumb: 'Login',
        },
        component: AuthenticationComponent
      },
    ]
  },
  {
    path: '**',
    component: NoPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
