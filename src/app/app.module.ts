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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CorsInterceptorService } from './cors/cors-interceptor.service';
import { PartyListComponent } from './home/party-list/party-list.component';
import { PartyInstanceComponent } from './home/party-list/party-instance/party-instance.component';
import { NoPartyFoundComponent } from './no-party-found/no-party-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HowToUseComponent,
    NoPartyFoundComponent,
    HomeComponent,
    PartyListComponent,
    PartyInstanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    PartyModule,
    YouTubePlayerModule,
    HttpClientModule
  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorsInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
