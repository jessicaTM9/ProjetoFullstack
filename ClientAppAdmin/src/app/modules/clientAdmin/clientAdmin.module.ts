import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientListComponent } from './components/clientList/clientList.component';
import { ClientComponent } from './components/client/client.component';
import { AddressComponent } from './components/addressForm/addressForm.component';


@NgModule({
  declarations: [
    ClientListComponent,
    ClientComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: ClientComponent },
      { path: 'client/:id', component: ClientComponent },
      { path: 'clients', component: ClientListComponent }
    ])
  ],
  exports: [
    ClientListComponent,
    ClientComponent,
    AddressComponent
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponent),
      multi: true
    }
  ],
})
export class ClientAdminModule { }
