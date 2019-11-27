import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { PizzaListComponent } from '../pizza-list/pizza-list.component';
import { ProfileComponent } from '../profile/profile.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { CartComponent } from '../cart/cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pizzas',
    pathMatch: 'full'
  },
  {
    path: 'users/:id',
    component: UserDetailComponent
  },
  {
    path: 'pizzas',
    component: PizzaListComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }