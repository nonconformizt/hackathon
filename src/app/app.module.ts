import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderUserComponent } from './header/header-user/header-user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderButtonsComponent } from './header/header-buttons/header-buttons.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';

import { CookieService } from "angular2-cookie/services/cookies.service";
import { AuthService } from './auth.service';
import { UserDataService } from './userdata.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderUserComponent,
    HomepageComponent,
    HeaderButtonsComponent,
    AuthModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService, 
    CookieService, 
    UserDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
