import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PartyMember } from './party-member.model';

@Component({
  selector: 'app-party-members',
  templateUrl: './party-members.component.html',
  styleUrls: ['./party-members.component.css']
})
export class PartyMembersComponent implements OnInit, OnChanges {

  @Input() partyMembers: PartyMember[] = new Array();
  @Input() partyTotalLoot!: number;

  constructor() {
    this.partyTotalLoot = 0;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.setPartyMembersLootSplit();
    console.log("partyMembers on changes", this.partyMembers);
  }

  setPartyMembersLootSplit() {
    var totalSharesPercent: number = 0.0;
    console.log("setPartyMembersLootSplit");
    this.partyMembers.forEach(ptMember => {
      totalSharesPercent += +ptMember.percentTimeInParty;
    });

    this.partyMembers.forEach(ptMember => {
      var silverShare = (+ptMember.percentTimeInParty * this.partyTotalLoot) / totalSharesPercent;
      ptMember.lootShareSilver = silverShare;
      console.log(ptMember.playerName, silverShare);
    });
    console.log("partyMembers : ", this.partyMembers);
  }

  ngOnInit(): void {
  }

}
