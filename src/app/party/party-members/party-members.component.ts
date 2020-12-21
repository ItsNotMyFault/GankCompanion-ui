import { Component, OnInit } from '@angular/core';
import { PartyMember } from './party-member.model';

@Component({
  selector: 'app-party-members',
  templateUrl: './party-members.component.html',
  styleUrls: ['./party-members.component.css']
})
export class PartyMembersComponent implements OnInit {

  test: PartyMember = new PartyMember("Veloester", "2020-12-10 23:10:09", "5 minutes", "99%", "500k");
  partyMembers: PartyMember[] = new Array();

  constructor() {
    //with a service fetch partyMembers...
    this.partyMembers = [this.test, this.test, this.test];
  }

  ngOnInit(): void {
  }

}
