export interface Client {
    id: number;
    name: string;
    birthDate: Date;
    cpf: string;
    rg: string;
    phone: string;
    addresses: Address[];
  }

  export interface Address {
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    zipcode: string;
  }


