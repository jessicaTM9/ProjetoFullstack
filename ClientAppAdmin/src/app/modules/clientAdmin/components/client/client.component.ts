import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../../services/clientService.service';
import { Address, Client } from '../../interfaces/clientInterface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit, OnDestroy {
  client!: Client;
  address: Address = {
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    zipcode: '',
  };
  clientForm!: FormGroup;
  private routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private fb: FormBuilder,
    private location: Location
  ) {
    this.routeSub = new Subscription();
    this.createForm();
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: { [x: string]: string | number; }) => {
      const id = +params['id'];
      this.clientService.getClient(id)
        .subscribe(client => {
          if (client) {
            this.client = client;
            this.address = client.addresses?.[0] ?? this.address;
            this.updateForm();
          } else {
            console.error('Cliente não encontrado');
          }
        });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  createForm(): void {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      birthDate: [''],
      cpf: ['', Validators.required],
      rg: [''],
      phone: [''],
      address: this.fb.group({
        street: [''],
        number: [''],
        complement: [''],
        neighborhood: [''],
        city: [''],
        state: [''],
        zipCode: ['']
      })
    });
  }

  updateForm(): void {
    if (this.clientForm) {
      this.clientForm.setValue({
        name: this.client?.name ?? '',
        birthDate: this.client?.birthDate ?? '',
        cpf: this.client?.cpf ?? '',
        rg: this.client?.rg ?? '',
        phone: this.client?.phone ?? '',
        address: {
          street: this.address?.street ?? '',
          number: this.address?.number ?? '',
          complement: this.address?.complement ?? '',
          neighborhood: this.address?.neighborhood ?? '',
          city: this.address?.city ?? '',
          state: this.address?.state ?? '',
          zipCode: this.address?.zipcode ?? ''
        }
      });
    }
  }
  goBack(): void {
    this.location.back();
  }


  onSubmit(): void {

    if (this.clientForm && this.client) {

      const client: Client = {

        ...this.client,
        ...this.clientForm.value,
        // addresses: [this.clientForm?.value?.address]
      };
      this.clientService.updateClient(client)
      .subscribe(() => this.goBack());
  console.log(client)

  }

}
}
