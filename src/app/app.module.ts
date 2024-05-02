import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { IndexComponent } from './components/index/index.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    CategoriesComponent,
    ContactsComponent,
    OrdersComponent,
    UsersComponent,
    LoginComponent,
    ProductsComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    HttpClientModule // Ajoute HttpClientModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
