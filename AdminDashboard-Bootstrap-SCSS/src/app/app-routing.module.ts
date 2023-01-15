import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ShopsComponent } from './components/shops/shops.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UsersComponent } from './components/users/users.component';
import { MainComponent } from './components/main/main.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '',
  component: HomeComponent,
 children: [
   {path: '', redirectTo: '/home', pathMatch: 'full'},
   {path: 'home', component: MainComponent},
   {path: 'products', component: ProductsComponent},
   {path: 'shops', component: ShopsComponent},
   {path: 'orders', component: OrdersComponent},
   {path: 'users', component: UsersComponent},
   {path: 'accounts', component: AccountsComponent},
   {path: 'tg-admin', component: LoginComponent},
 ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
