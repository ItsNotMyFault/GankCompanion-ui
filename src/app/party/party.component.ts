import { OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartyMember } from './party-members/party-member.model';
import { PartyService } from './party.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit, OnChanges {

  partyId!: string;
  totalLoot: number;
  partyMembers: PartyMember[];

  constructor(private activatedRoute: ActivatedRoute, private partyService: PartyService) {
    this.totalLoot = 0;
    this.partyMembers = [];

  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  async ngOnInit(): Promise<void> {
    const fechtedPartyId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("fechtedPartyId: " + fechtedPartyId);
    this.partyId = fechtedPartyId !== null ? fechtedPartyId : "0";
    console.log("partyId: " + this.partyId);
    const ptMembers = await this.partyService.getPartyMembers(this.partyId);
    console.log(ptMembers);
    this.partyMembers = ptMembers.partyMemberResponses;
    console.log(this.partyMembers);
  }

}
