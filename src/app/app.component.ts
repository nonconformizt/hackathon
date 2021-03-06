import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hackathon';

  constructor(
    private auth: AuthService,
    private cookie : CookieService) { }

  ngOnInit() {
    if( !(this.auth.token = this.cookie.get("token")) ) 
    {
      this.auth.token = (Math.round(Math.random()*10000)*Date.now()).toString();
      this.cookie.set("token", this.auth.token);
    }
    else {
      this.auth.fetchUserData();
    }
  }
}
