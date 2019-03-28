import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RoutePageComponent } from './tickets/route-page/route-page.component';
import { TicketsSearchComponent } from './tickets/tickets-search/tickets-search.component';
import { BuyTicketComponent } from './tickets/buy-ticket/buy-ticket.component';
import { OfficeComponent } from './office/office.component';
import { AdminComponent } from './admin/admin.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path : '', pathMatch : 'full', component : HomepageComponent },
  { path : 'route/:id/buy/:seat', component : BuyTicketComponent },
  { path : 'route/:id', component : RoutePageComponent },
  { path : 'tickets', component : TicketsSearchComponent },
  { path : 'office', component : OfficeComponent },
  { path : 'admin', component : AdminComponent },
  { path : 'payment', component : PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
