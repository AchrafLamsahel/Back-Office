import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { IndexComponent } from './components/index/index.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AuthGuard } from './guards/auth.guard';
import { SideBarComponent } from './components/side-bar/side-bar.component';

const routes: Routes = [
  { path : '' ,redirectTo:'login', pathMatch: 'full' },
  { path : 'login',component: LoginComponent},
  { path : 'categories' , component : CategoriesComponent,canActivate:[AuthGuard]},
  { path : 'deshboard' , component : IndexComponent,canActivate:[AuthGuard]},
  { path : 'products' , component : ProductsComponent,canActivate:[AuthGuard]},
  { path : 'users' , component : UsersComponent,canActivate:[AuthGuard]},
  { path : 'orders' , component : OrdersComponent,canActivate:[AuthGuard]},
  { path : 'contacts' , component : ContactsComponent,canActivate:[AuthGuard]},
  { path : 'sidebar' ,component : SideBarComponent,canActivate:[AuthGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Location]
})
export class AppRoutingModule { }
