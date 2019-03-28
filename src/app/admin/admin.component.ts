import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  models: any[] = [];
  ships: any[] = [];
  flights: any[] = [];
  tickets: any[] = [];

  constructor(
    private auth: AuthService
  ) {
    this.loadData();
  }

  loadData() {
    this.auth.sendRequest('get', 'world', 'models', {},
      (resp) => this.models = resp.models
    );
    this.auth.sendRequest('get', 'world', 'ships', {},
      (resp) => this.ships = resp.ships
    );
    this.auth.sendRequest('get', 'flight', 'flights', {},
      (resp) => {
        this.flights = resp.flights;
      }
    );
    this.auth.sendRequest('get', 'flight', 'tickets', {},
      (resp) => this.tickets = resp.tickets
    );
  }

  onAddShip(f: NgForm) {
    if (f.valid) {
      this.auth.sendRequest('post', 'world', 'ship',
        { model_id: f.value.model_id },
        (resp) => {
          this.loadData();
          f.reset();
        }
      );
    }
  }

  onDeleteShip(f: NgForm) {
    if (f.valid) {
      this.auth.sendRequest('put', 'world', 'ship',
        { ship_id: f.value.ship_id },
        (resp) => {
          this.loadData();
          f.reset();
        }
      );
    }
  }
  
  onAddFlight(f: NgForm) {
    if (f.valid) {
      this.auth.sendRequest('post', 'flight', 'new',
        { 
          way: f.value.way,
          dep_time: (new Date(f.value.dep_time)).getTime(),
          spaceship: f.value.spaceship
        },
        (resp) => {
          this.loadData();
          f.reset();
        }
      );
    }
  }

  onReset() {
    if (confirm("Сбросить систему?"))
      this.auth.sendRequest('post', 'world', 'new', {},
        (resp) => {
          this.loadData();
        }
      );
  }

}
