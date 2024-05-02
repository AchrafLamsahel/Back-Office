import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { IndexComponent } from './components/index/index.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  { path : '' ,redirectTo:'deshboard', pathMatch: 'full' },
  { path : 'login',component: LoginComponent},
  { path : 'categories' , component : CategoriesComponent},
  { path : 'deshboard' , component : IndexComponent},
  { path : 'products' , component : ProductsComponent},
  { path : 'users' , component : UsersComponent},
  { path : 'orders' , component : OrdersComponent},
  { path : 'contacts' , component : ContactsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
