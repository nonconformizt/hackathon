import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SearchService } from '../search.service';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  luck_id: number = 1;
  best_id: number = 1;

  constructor(
    private search: SearchService,
    public auth: AuthService,
    private title: Title
  ) {
    this.title.setTitle("COSMOPORT - Как тебе такое, Илон Маск?");
  }

  ngOnInit() {
    this.auth.sendRequest('get', 'flight', 'best', {},
      (resp) => this.best_id = resp.flight_id
    )
    // if (this.auth.loggedIn) {
      this.auth.sendRequest('get', 'flight', 'luck', {},
        (resp) => {if(resp.response_code !== -1)
         this.luck_id = resp.flight_id;}
      );
    // }
  }


  onSearch(form: NgForm) {
    if (form.valid) {
      this.search.request = JSON.parse(JSON.stringify(form.value));
      this.search.fetch();
    }
  }

}
