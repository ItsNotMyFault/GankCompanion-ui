import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { PartyModule } from './party/party.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { PartyMemberComponent } from './party/party-members/party-member/party-member.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HowToUseComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    PartyModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
