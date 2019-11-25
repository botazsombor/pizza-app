import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from "../user-list/user-list.component";
import { UserFormComponent } from '../user-form/user-form.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { PizzaListComponent } from '../pizza-list/pizza-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'users/add',
    component: UserFormComponent
  },
  {
    path: 'users/:id',
    component: UserDetailComponent
  },
  {
    path: 'pizzas',
    component: PizzaListComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }