import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PartyMember } from './party-members/party-member.model';

@Injectable({ providedIn: 'root' })
export class PartyService {
    partyMembersChanged = new Subject<PartyMember[]>();

    test: PartyMember = new PartyMember("Veloester", "2020-12-10 23:10:09", "5 minutes", 0.99, 500);
    private partyMembers: PartyMember[] = [];

    constructor(private http: HttpClient) {
        this.partyMembers = [this.test, this.test];
    }

    setRecipes(partyMembers: PartyMember[]) {
        this.partyMembers = partyMembers;
        this.partyMembersChanged.next(this.partyMembers.slice());
    }

    getParty(index: number) {
        return this.partyMembers[index];
    }

}
