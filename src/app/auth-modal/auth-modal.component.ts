import { Component, HostListener } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from "@angular/forms";

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

  onLogInSubmit(form : NgForm) {  
    if (form.valid)  
      this.auth.login(form.value);
  }

  onRegisterSubmit(form : NgForm) {
    if(form.valid)
      this.auth.register(form.value);
  }

  /**
   *    Exit by clicking on overlay feature
   */

  isClickedInside : boolean = false;

  onClickInside() {
    this.isClickedInside = true;
  }

  onClickOutside() {
    if(!this.isClickedInside)
      this.auth.cancel();

    this.isClickedInside = false;
  }

}
