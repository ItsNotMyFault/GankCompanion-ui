import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PartyMember } from './party-members/party-member.model';

@Injectable({ providedIn: 'root' })
export class PartyService {
    partyMembersChanged = new Subject<PartyMember[]>();

    private partyMembers: PartyMember[] = [];

    constructor(private http: HttpClient) {
    }
    backendUrl: string = "https://localhost:44331/Party/"
    // backendUrl: string = "https://gankcompanion.azurewebsites.net/Party/"

    async getPartyMembers(partyId: string) {
        var subscriptionResult = await this.http.get<any>(this.backendUrl + 'GetPartyMembersByPartyId?partyId=' + partyId).toPromise();
        console.log("getPartyMembers", subscriptionResult);
        return subscriptionResult;
    }

    async getPartiesByPlayerName(playerName: string) {
        var subscriptionResult = await this.http.get<any>(this.backendUrl + 'GetPartiesByPlayerName?playerName=' + playerName).toPromise();
        console.log("getPartiesByPlayerName", subscriptionResult);
        return subscriptionResult;
    }

    async getPartyReportByPartyId(partyId: string) {
        var subscriptionResult = await this.http.get<any>(this.backendUrl + 'GetPartyReport?partyId=' + partyId).toPromise();
        console.log("getPartyReportByPartyId", subscriptionResult);
        return subscriptionResult;
    }

}
