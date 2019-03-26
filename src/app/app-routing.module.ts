import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TicketPageComponent } from './tickets/ticket-page/ticket-page.component';
import { TicketsSearchComponent } from './tickets/tickets-search/tickets-search.component';

const routes: Routes = [
  { path : '', pathMatch : 'full', component : HomepageComponent },
  { path : 'tickets/:id', component : TicketPageComponent },
  { path : 'tickets', component : TicketsSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
