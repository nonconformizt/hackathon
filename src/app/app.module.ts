import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderUserComponent } from './header/header-user/header-user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderButtonsComponent } from './header/header-buttons/header-buttons.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';

import { CookieService } from "ngx-cookie-service";
import { AuthService } from './auth.service';
import { UserDataService } from './userdata.service';
import { RoutePageComponent } from './tickets/route-page/route-page.component';
import { TicketsSearchComponent } from './tickets/tickets-search/tickets-search.component';
import { ChooseSeatComponent } from './tickets/choose-seat/choose-seat.component';
import { SeatComponent } from './tickets/choose-seat/seat/seat.component';
import { BuyTicketComponent } from './tickets/buy-ticket/buy-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderUserComponent,
    HomepageComponent,
    HeaderButtonsComponent,
    AuthModalComponent,
    TicketsSearchComponent,
    RoutePageComponent,
    ChooseSeatComponent,
    SeatComponent,
    BuyTicketComponent
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
    UserDataService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
