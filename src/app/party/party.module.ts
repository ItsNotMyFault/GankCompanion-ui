import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GraphKillsComponent } from './graph-kills/graph-kills.component';
import { GankReportComponent } from './gank-report/gank-report.component';
import { PartyMembersComponent } from './party-members/party-members.component';
import { PartyComponent } from './party.component';


@NgModule({
    declarations: [
        PartyComponent,
        GraphKillsComponent,
        GankReportComponent,
        PartyMembersComponent,
    ],
    exports: [
        PartyComponent,
        GraphKillsComponent,
        GankReportComponent,
        PartyMembersComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
})
export class PartyModule { }
