
export class AuthService {
  modalOpened : boolean = false;
  modalNewAcc : boolean = false;
  modalTitle : string = "Вход в систему";
  loggedIn : boolean = false;

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

}