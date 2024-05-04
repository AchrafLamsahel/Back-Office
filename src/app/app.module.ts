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
import { authInterceptorProviders } from './interceptors/authorization.interceptor';
import { ReactiveFormsModule } from '@angular/forms';


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
    ReactiveFormsModule, /** offre les Gestion de l'état asynchrone , Création dynamique des formulaires, Validation avancée, Suivi des états et des erreurs , Gestion des groupes .... */
    HttpClientModule,  /**  Offre les classes pour consummer une service Web  GET POST DELETE UPDATE.. */
    HttpClientModule,
    BrowserModule,
    HttpClientModule // Ajoute HttpClientModule ici
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
