import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-tickets-search',
  templateUrl: './tickets-search.component.html',
  styleUrls: ['./tickets-search.component.css']
})
export class TicketsSearchComponent implements OnInit {

  tickets: any[] = [];

  constructor(private search: SearchService) { }

  ngOnInit() {
    // this.tickets = this.search.response.results;
    this.tickets = (JSON.parse('{"response_code":1,"response_comment":"","results":[{"flight_id":"3","departure_time":"1","arrival_time":"1753689023","price":"1500","spaceship":{"model_name":"U-72","free_places":150},"way":[{"planet_name":"Мерсенн","port_name":{"port_name":"Q-63"}},{"planet_name":"Посидоний","port_name":{"port_name":"A-41"}}]},{"flight_id":"4","departure_time":"1","arrival_time":"1753689023","price":"2700","spaceship":{"model_name":"B-67","free_places":150},"way":[{"planet_name":"Посидоний","port_name":{"port_name":"C-72"}},{"planet_name":"Тихо","port_name":{"port_name":"X-35"}}]},{"flight_id":"5","departure_time":"1","arrival_time":"1753689023","price":"5000","spaceship":{"model_name":"B-67","free_places":150},"way":[{"planet_name":"Посидоний","port_name":{"port_name":"A-41"}},{"planet_name":"Пико","port_name":{"port_name":"R-30"}}]}]}')).results;
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
        ticket.duration += dur.getDay().toString() + "д. ";
      ticket.duration += dur.getHours().toString() + "час. ";
      ticket.duration += dur.getHours().toString() + "мин.";

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
