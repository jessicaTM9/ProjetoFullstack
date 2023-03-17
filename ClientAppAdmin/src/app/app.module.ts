import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './modules/loginAdmin/components/login/login.component';
import { AddressComponent } from './modules/clientAdmin/components/addressForm/addressForm.component';
import { ClientComponent } from './modules/clientAdmin/components/client/client.component';
import { ClientListComponent } from './modules/clientAdmin/components/clientList/clientList.component';
import { ClientAdminModule } from './modules/clientAdmin/clientAdmin.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'client/:id', component: ClientComponent },
      { path: 'clients', component: ClientListComponent }
    ]),

  ],
  declarations: [
    AppComponent,
    CounterComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
