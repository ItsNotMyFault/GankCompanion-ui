import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GraphKillsComponent } from './graph-kills/graph-kills.component';
import { GankReportComponent } from './gank-report/gank-report.component';
import { PartyMembersComponent } from './party-members/party-members.component';
import { PartyComponent } from './party.component';
import { PartyMemberComponent } from './party-members/party-member/party-member.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        PartyComponent,
        PartyMembersComponent,
        PartyMemberComponent,
        GraphKillsComponent,
        GankReportComponent
    ],
    exports: [
        PartyComponent,
        GraphKillsComponent,
        GankReportComponent,
        PartyMembersComponent,
        PartyMemberComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
})
export class PartyModule { }
