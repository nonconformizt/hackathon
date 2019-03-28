import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
// import { Router } from '@angular/router';
// import { UserDataService } from '../userdata.service';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  user : any = {};

  tickets : any[] = [];

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {

    this.auth.sendRequest('get', 'user', 'selfdata', {}, (resp) => {
      this.user = resp.user_data;
      
    });

    
    this.auth.sendRequest('get', 'flight', 'usertickets', {}, (resp) => {
      this.tickets = resp.results;

      this.tickets.forEach(ticket => {
        const arr = new Date(ticket.arrival_time * 1000);
        const dep = new Date(ticket.departure_time * 1000);
        const dur = new Date((ticket.arrival_time - ticket.departure_time) * 1000);
        ticket.arrival = {
          hours: arr.getHours() < 10 ? '0' + arr.getHours().toString() : arr.getHours().toString(),
          min: arr.getMinutes() < 10 ? '0' + arr.getMinutes().toString() : arr.getMinutes().toString(),
          date: arr.getDay().toString() + " " + this.monthName(arr.getMonth()),
        };
        ticket.departure = {
          hours: dep.getHours() < 10 ? '0' + dep.getHours().toString() : dep.getHours().toString(),
          min: dep.getMinutes() < 10 ? '0' + dep.getMinutes().toString() : dep.getMinutes().toString(),
          date: dep.getDay().toString() + " " + this.monthName(dep.getMonth()),
        };
  
        ticket.duration = "";
        if (dur.getDay() > 0)
          ticket.duration += dur.getDay().toString() + " д  . ";
        ticket.duration += dur.getHours().toString() + " час. ";
        ticket.duration += dur.getHours().toString() + " мин.";
  
      });


    });


  }

  monthName(n: number) {
    switch (n) {
      case 0:
        return "января";
      case 1:
        return "февраля";
      case 2:
        return "марта";
      case 3:
        return "апреля";
      case 4:
        return "мая";
      case 5:
        return "июня";
      case 6:
        return "июля";
      case 7:
        return "августа";
      case 8:
        return "сентября";
      case 9:
        return "октября";
      case 10:
        return "ноября";
      case 11:
        return "декабря";
      default:
        return "";
    }
  }

}
