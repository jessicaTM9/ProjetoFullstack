import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from '../interfaces/clientInterface';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly apiUrl = 'https://localhost:5118';

  constructor(private https: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.https.get<Client[]>(this.apiUrl);
  }

  getClient(id: number): Observable<Client> {
    return this.https.get<Client>(`${this.apiUrl}/${id}`);
  }

  createClient(client: Client): Observable<Client> {
    return this.https.post<Client>(this.apiUrl, client);
  }

  updateClient(client: Client): Observable<Client> {
    return this.https.put<Client>(`${this.apiUrl}/${client.id}`, client);
  }

  deleteClient(id: number): Observable<void> {
    return this.https.delete<void>(`${this.apiUrl}/${id}`);
  }

}
