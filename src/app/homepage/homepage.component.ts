import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SearchService } from '../search.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(
    private search: SearchService,
    private title: Title
    ) {
      this.title.setTitle("COSMOPORT - Как тебе такое, Илон Маск?");
    }


  onSearch(form: NgForm) {
    if (form.valid) {
      this.search.request = JSON.parse(JSON.stringify(form.value));
      this.search.fetch();
    }
  }

}
