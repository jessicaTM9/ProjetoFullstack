import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Client } from '../../interfaces/clientInterface';
import { ClientService } from '../../services/clientService.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './clientList.component.html',
  styleUrls: ['./clientList.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.getClients();

    // Inscreve-se no evento NavigationEnd do router para atualizar a lista de clientes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.getClients();
    });
  }

  getClients(): void {
    this.clientService.getClients().subscribe(clients => this.clients = clients);
  }

  viewClientDetails(id: number): void {
    this.router.navigate(['/client', id]);
  }

  editClient(id: number): void {
    this.router.navigate(['/client/edit', id]);
  }

  deleteClient(id: number): void {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      this.clientService.deleteClient(id).subscribe(() => {
        this.clients = this.clients.filter(c => c.id !== id);
      });
    }
  }

  addClient(): void {
    this.router.navigate(['/clients']);

    // Inscreve-se no evento NavigationEnd do router para atualizar a lista de clientes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.getClients();
    });
  }
}
