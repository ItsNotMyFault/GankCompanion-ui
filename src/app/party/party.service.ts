import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PartyMember } from './party-members/party-member.model';

@Injectable({ providedIn: 'root' })
export class PartyService {
    partyMembersChanged = new Subject<PartyMember[]>();

    test: PartyMember = new PartyMember("Veloester", "2020-12-10 23:10:09", 5, 0.99, 500);
    private partyMembers: PartyMember[] = [];

    constructor(private http: HttpClient) {
        this.partyMembers = [this.test, this.test];
    }
    backendUrl: string = "https://gankcompanion.azurewebsites.net/Party/"

    async getPartyMembers(partyId: string) {
        var subscriptionResult = await this.http.get<any>(this.backendUrl + 'GetPartyMembersByPartyId?partyId=' + partyId).toPromise();
        console.log(subscriptionResult);
        return subscriptionResult;
    }

    async getPartiesByPlayerName(playerName: string) {
        var subscriptionResult = await this.http.get<any>(this.backendUrl + 'GetPartiesByPlayerName?playerName=' + playerName).toPromise();
        console.log(subscriptionResult);
        return subscriptionResult;
    }

    async getPartyReportByPartyId(partyId: string) {
        var subscriptionResult = await this.http.get<any>(this.backendUrl + 'GetPartyReport?partyId=' + partyId).toPromise();
        console.log(subscriptionResult);
        return subscriptionResult;
    }

}
