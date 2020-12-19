import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GankReportComponent } from './gank-report/gank-report.component';
import { GraphKillsComponent } from './graph-kills/graph-kills.component';
import { PartyMembersComponent } from './party-members/party-members.component';
import { PartyComponent } from './party/party.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GankReportComponent,
    GraphKillsComponent,
    PartyMembersComponent,
    PartyComponent,
    HowToUseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
