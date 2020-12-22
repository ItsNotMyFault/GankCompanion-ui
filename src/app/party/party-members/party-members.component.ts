import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PartyMember } from './party-member.model';

@Component({
  selector: 'app-party-members',
  templateUrl: './party-members.component.html',
  styleUrls: ['./party-members.component.css']
})
export class PartyMembersComponent implements OnInit, OnChanges {

  test: PartyMember = new PartyMember("Veloester", "2020-12-10 23:10:09", "5 minutes", 0.99, 500);
  partyMembers: PartyMember[] = new Array();
  @Input() partyTotalLoot!: number;

  constructor() {
    this.partyTotalLoot = 0;
    //with a service fetch partyMembers...
    this.partyMembers = [this.test, this.test, this.test];
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.setPartyMembersLootSplit();
  }

  setPartyMembersLootSplit() {
    var totalSharesPercent = 0;

    this.partyMembers.forEach(ptMember => {
      totalSharesPercent += ptMember.lootSharePercent;
    });

    this.partyMembers.forEach(ptMember => {
      var silverShare = (ptMember.lootSharePercent * this.partyTotalLoot) / totalSharesPercent;
      ptMember.lootShareSilver = silverShare;
    });
  }

  ngOnInit(): void {
  }

}
