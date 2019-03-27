import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  request : {
    from : string, 
    to : string, 
    departure_time : string, 
    arrival_time : string
  } = null;
  response : any = {};

  constructor(private auth: AuthService,
              private router : Router) {  }
  
  fetch() {
    this.auth.sendRequest('post', 'flight', 'find', this.request, (resp) => {
      this.response = resp;
      this.router.navigate(['/tickets']);
    });
  }

}
