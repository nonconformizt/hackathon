import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CookieService } from "angular2-cookie/core";
import { UserDataService } from './userdata.service';


@Injectable()
export class AuthService {
  modalOpened : boolean = false;
  modalNewAcc : boolean = false;
  modalTitle : string = "Вход в систему";
  loggedIn : boolean = false;

  token : string;

  host: string = "http://192.168.43.102";

  constructor( private http: HttpClient,
               private userdata: UserDataService,
               private cookie: CookieService ) { }

  openRegisterModal() {
    this.modalNewAcc = true;
    this.modalOpened = true;
    this.modalTitle = "Регистрация";
  }

  openLoginModal() {
    this.modalNewAcc = false;
    this.modalOpened = true;
    this.modalTitle = "Вход в систему";
  }

  cancel() {
    this.modalOpened = false;
  }

  login(userData : any) {
    this.sendRequest("post","user", "auth", userData, 
      (response) => {
        if( response.response_code == 1 || response.response_comment == "Вы уже авторизованы" ) {
          this.loggedIn = true;
          this.modalOpened = false;
          this.fetchUserData();
        }
      }
    );
  }

  register(newUserData : any) {

    this.sendRequest("post", "user", "reg", newUserData, 
    (response) => {
      if( response.response_code == 1 || response.response_comment == "Вы уже авторизованы") {
        this.loggedIn = true;
        this.modalOpened = false;
      }
    });

  }

  fetchUserData() {
    this.sendRequest("get", "user", "selfdata", {}, 
      (response) => {
        if( response.response_code === 1 || response.response_comment == "Вы уже авторизованы"  ) {  

          this.userdata.change({
            first_name : response.user_data.first_name,
            last_name : response.user_data.last_name
          });

        }
      }
    );
  }

  sendRequest(method : string, module : string, action : string, data : any, callback? : Function)
  {
    const sesskey = this.cookie.get('token');
    this.http[method]( this.host + '/' + module + '/' + action + '/?sesskey=' + sesskey, data)
        .subscribe(
          (response : any) => {
            console.log(response);
            callback(response);
          },
          (error) => {
            console.log(error);
          }
        );
  }

}