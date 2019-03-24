import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isTransparent : boolean = false;

  constructor(private auth : AuthService,
              private router : Router) 
  {
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd)
        if (val.url == "/") 
          this.isTransparent = true;
        else
          this.isTransparent = false;
    });
  }

}
