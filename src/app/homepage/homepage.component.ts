import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor( private search : SearchService) {  }

  onSearch(form : NgForm) {
    // if (form.valid) {
      this.search.request = JSON.parse(JSON.stringify(form.value));
      this.search.fetch();
    // }
  }

}
