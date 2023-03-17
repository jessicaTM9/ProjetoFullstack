import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from '../../interfaces/clientInterface';

@Component({
  selector: 'app-address',
  templateUrl: './addressForm.component.html',
  styleUrls: ['./addressForm.component.css']
})
export class AddressComponent {
  @Input() address?: Address;
  @Output() saveAddress = new EventEmitter<Address>();
  addressForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.addressForm = this.fb.group({
      street: [this.address?.street],
      number: [this.address?.number],
      complement: [this.address?.complement],
      neighborhood: [this.address?.neighborhood],
      city: [this.address?.city],
      state: [this.address?.state],
      zipCode: [this.address?.zipcode],
    });

    this.addressForm.valueChanges.subscribe((value) => {
      this.saveAddress.emit(value);
    });
  }

  onSubmit() {
    if (this.addressForm.valid) {
      const address = { ...this.address, ...this.addressForm.value };
      this.saveAddress.emit(address);
    }
  }
}
