import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../auth.service';
import { UserDataService } from '../../userdata.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-route-page',
  templateUrl: './route-page.component.html',
  styleUrls: ['./route-page.component.css']
})
export class RoutePageComponent implements OnInit {

  flightID: number = null;
  way: any[] = [];
  flight: any = {};

  first_name: string = "";
  last_name: string = "";

  seatIsNotChosen: boolean = false;
  chooseSeatOpened: boolean = false;
  seat: number = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private userdata: UserDataService,
    private title: Title) {
    this.title.setTitle("Ваш маршрут | COSMOPORT");
    this.flightID = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    if (this.userdata.first_name !== "default")
      this.fillForm();

    this.userdata.changed.subscribe(() => this.fillForm());

    this.auth.sendRequest('put', 'flight', 'flight', { "flight_id": this.flightID }, (resp: any) => {
      this.flight = resp.flight_data;
      this.way = resp.flight_data.way;

      const arr = new Date(resp.flight_data.arrival_time * 1000);
      const dep = new Date(resp.flight_data.departure_time * 1000);

      this.flight.arrival = {
        hours: arr.getHours() < 10 ? '0' + arr.getHours().toString() : arr.getHours().toString(),
        min: arr.getMinutes() < 10 ? '0' + arr.getMinutes().toString() : arr.getMinutes().toString(),
        date: arr.getDay().toString() + " " + this.monthName(arr.getMonth()),
      };
      this.flight.departure = {
        hours: dep.getHours() < 10 ? '0' + dep.getHours().toString() : dep.getHours().toString(),
        min: dep.getMinutes() < 10 ? '0' + dep.getMinutes().toString() : dep.getMinutes().toString(),
        date: dep.getDay().toString() + " " + this.monthName(dep.getMonth()),
      };
    })
  }

  goToForm() {
    document.getElementById("form").scrollIntoView();
  }

  onResult(seat: number) {
    this.seat = seat;
    this.chooseSeatOpened = false;
    this.seatIsNotChosen = false;
  }

  fillForm() {
    this.first_name = this.userdata.translit(this.userdata.first_name).toUpperCase();
    this.last_name = this.userdata.translit(this.userdata.last_name).toUpperCase();
  }

  onBuyClick(form: NgForm) {
    if (this.seat === null)
      this.seatIsNotChosen = true;
    if (form.valid && this.seat) {
      // GO !
      this.auth.sendRequest('post', 'flight', 'ticket',
        {
          flight_id: this.flightID,
          place_id: this.seat
        },
        (resp) => {
          if (resp.response_code == -1)
            alert(resp.response_comment);
          else
            this.router.navigate(
              ['./','buy', this.seat], 
              { relativeTo: this.route }
            );
        })

    }
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
