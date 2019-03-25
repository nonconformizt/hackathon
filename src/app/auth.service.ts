import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from "angular2-cookie/core";

@Injectable()
export class AuthService {
  modalOpened : boolean = false;
  modalNewAcc : boolean = false;
  modalTitle : string = "Вход в систему";
  loggedIn : boolean = false;

  token : string;

  host: string = "http://192.168.43.102";

  constructor( private http: HttpClient,
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
    const sesskey = this.cookie.get('token');
    console.log("Login: " + sesskey);
    console.log(userData);
    

    this.http.post('http://192.168.43.102/user/auth/?sesskey=' + sesskey, userData)
        .subscribe(
          (responce : any) => {
            console.log(responce);
            if( responce.response_code == 1 ) {
              this.loggedIn = true;
              this.modalOpened = false;
            }
          },
          (error) => {
            console.warn(error);
          }
        );
  }

  register(newUserData : any) {
    const sesskey = this.cookie.get('token');
    console.log(sesskey);
    console.log(newUserData);

    this.http.put('http://192.168.43.102/user/reg/?sesskey=' + sesskey, newUserData)
        .subscribe(
          (responce) => {
            console.log(responce);
          },
          (error) => {
            console.warn(error);
          }
        );
  }

}