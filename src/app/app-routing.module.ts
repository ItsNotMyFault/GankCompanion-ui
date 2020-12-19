import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { PartyComponent } from './party/party.component';

const routes: Routes = [
  { path: 'party', component: PartyComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tutorial', component: HowToUseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
