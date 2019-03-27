import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../../auth.service';
import { UserDataService } from '../../userdata.service';


@Component({
  selector: 'app-route-page',
  templateUrl: './route-page.component.html',
  styleUrls: ['./route-page.component.css']
})
export class RoutePageComponent implements OnInit {

  flightID : number = null;
  way : any[] = [];
  flight : any = {};

  first_name : string = "";
  last_name : string = "";

  chooseSeatOpened : boolean = false;
  seat : number = null;

  constructor(private route: ActivatedRoute, 
              private auth : AuthService,
              private userdata : UserDataService) {
                
     this.flightID = this.route.snapshot.params['id'];

     if ( this.userdata.first_name !== "default" ) {
       this.first_name = this.userdata.translit(this.userdata.first_name).toUpperCase();
       this.last_name = this.userdata.translit(this.userdata.last_name).toUpperCase();
     }
  }

  ngOnInit() {
    this.auth.sendRequest('put', 'flight', 'flight', {"flight_id" : this.flightID}, (resp : any) => { 
      this.flight = resp.flight_data; 
      this.way = resp.flight_data.way;
    })
  }

  goToForm() {    
    var form = document.getElementById("form");
    form.scrollIntoView();
  }

  onResult(seat : number) {
    this.seat = seat;
    this.chooseSeatOpened = false;
  }

}
