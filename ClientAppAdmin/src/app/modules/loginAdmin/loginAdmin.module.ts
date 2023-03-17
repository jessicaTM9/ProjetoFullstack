import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ClientListComponent } from '../clientAdmin/components/clientList/clientList.component';
import { ClientComponent } from '../clientAdmin/components/client/client.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'client/:id', component: ClientComponent },
  { path: 'clients', component: ClientListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoginModule { }
