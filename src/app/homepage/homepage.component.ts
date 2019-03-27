import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor( private auth : AuthService ) {  }

  onSearch(form : NgForm) {
    console.log(form);
    this.auth.fetchUserData();
  }

}
