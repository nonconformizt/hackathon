import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.css']
})
export class TicketPageComponent {

  chooseSeatOpened : boolean = false;
  ticketToChooseID : string = "";

  goToForm() {    
    var form = document.getElementById("form");
    form.scrollIntoView();
  }

  onChooseSeat(ticketID : string) {
    this.chooseSeatOpened = true;
  }

  onResult(seat : number) {
    console.warn("User had chosen a seat number " + seat); 

    this.chooseSeatOpened = false;
  }

}
