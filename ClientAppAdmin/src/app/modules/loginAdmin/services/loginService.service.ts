import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginInterface } from '../interfaces/loginInterface';
import { firstValueFrom, lastValueFrom } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

constructor(private readonly https: HttpClient,
  private readonly router: Router
  ) { }

  login(user: LoginInterface) {
    return firstValueFrom(this.https.post('/api/login', user))
      .then(() => {
        this.router.navigate(['/clients']);
      });
  }


}
