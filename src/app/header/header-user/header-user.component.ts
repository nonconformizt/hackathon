import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent {
  dropdownOpened : boolean = false;

  @HostListener('window:click', ['$event']) click(event){
    if( !this.isDropdown(event.target) && this.dropdownOpened )
      this.toggleDropdown();
  }

  isDropdown (target : HTMLElement) {
    if( target.classList.contains('header__dropdown') || 
        target.classList.contains('header__user-section') || 
        target.classList.contains('header__username') || 
        target.classList.contains('header__avatar') || 
        target.classList.contains('header__dropdown-item') ) {
          return true;
        }
    return false;
  }

  toggleDropdown() {
    this.dropdownOpened = !this.dropdownOpened;
  }

}
