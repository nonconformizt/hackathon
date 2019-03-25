import { Component, HostListener, OnInit } from '@angular/core';
import { UserDataService } from '../../userdata.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {
  dropdownOpened : boolean = false;

  name : string = '';

  @HostListener('window:click', ['$event']) click(event){
    if( !this.isDropdown(event.target) && this.dropdownOpened )
      this.toggleDropdown();
  }

  constructor( private userData : UserDataService ) {}

  ngOnInit() {
    
    this.name = this.userData.first_name + ' ' + this.userData.last_name;

    this.userData.changed.subscribe(() => {
      this.name = this.userData.first_name + ' ' + this.userData.last_name;
    })
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
