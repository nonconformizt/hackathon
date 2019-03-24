import { Component, HostListener } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent {
  @HostListener('window:keydown', ['$event']) click(e : KeyboardEvent){
    if( e.key === "Escape" )
      this.auth.cancel();
    else if ( e.key === "Enter" )
      1;
  }

  isOpened: boolean = true;
  message : string = "Are you sure you want to remove this note permanently?";

  constructor( public auth : AuthService ) {}


}
