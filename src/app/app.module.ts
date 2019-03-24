import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderUserComponent } from './header/header-user/header-user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthService } from './auth.service';
import { HeaderButtonsComponent } from './header/header-buttons/header-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderUserComponent,
    HomepageComponent,
    HeaderButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
