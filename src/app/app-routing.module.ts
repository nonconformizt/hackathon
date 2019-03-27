import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RoutePageComponent } from './tickets/route-page/route-page.component';
import { TicketsSearchComponent } from './tickets/tickets-search/tickets-search.component';

const routes: Routes = [
  { path : '', pathMatch : 'full', component : HomepageComponent },
  { path : 'route/:id', component : RoutePageComponent },
  { path : 'tickets', component : TicketsSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
