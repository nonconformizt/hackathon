import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.css']
})
export class TicketPageComponent implements OnInit {

  chooseSeatOpened : boolean = true;

  constructor() { }

  ngOnInit() {

  }

  goToForm() {    
    var form = document.getElementById("form");
    form.scrollIntoView();
  }

}
