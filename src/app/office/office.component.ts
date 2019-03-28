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

  constructor(
    private auth: AuthService,
    // private router : Router,
    // public userData : UserDataService
  ) { }

  ngOnInit() {

    this.auth.sendRequest('get', 'user', 'selfdata', {}, (resp) => {
      this.user = resp.user_data;
      
    })



  }

}
